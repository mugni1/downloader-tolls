import { useState } from "react";
import { Btn } from "../components/Button";
import { Container2 } from "../components/Container";
import { Title } from "../components/Title";
import axios from "axios";
import swal from "sweetalert";
import { Tutorial } from "../components/Tutorial";
import { Decription } from "../components/Decription";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LoadingButton } from "../components/Loading";
import { Input } from "../components/Input";

export default function TwitterX() {
  const [link, setLink] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataLink, setDataLink] = useState({});

  const download = () => {
    event.preventDefault();
    setLoading(true);
    axios({
      method: "GET",
      url: "https://api.febrita.biz.id/downloader/twitter?url=" + link,
    })
      .then((response) => {
        setDataLink(response.data);
      })
      .catch((error) => {
        console.log(error);
        swal({
          icon: "error",
          title: "Download Failed",
          text: "Please Check link or your connections",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Header className="bg-sky-600" />
      <Container2 className="bg-gradient-to-br from-sky-600 via-slate-600 to-slate-900">
        <Title className="py-10 text-white">Download Video Twitter / X </Title>
        {/* form  */}
        <form onSubmit={download} className="container mx-auto px-5">
          <Input
            className="outline-slate-600"
            value={link}
            setValue={(e) => setLink(e.target.value)}
          />
          <Btn className="bg-emerald-600 ring-emerald-500">
            {loading ? <LoadingButton /> : "Download"}
          </Btn>
        </form>
        {/* end form  */}

        {/* Data Video and audio and decription */}
        {Object.keys(dataLink).length != 0 ? (
          <div className=" container mx-auto px-5 mt-10">
            <div className="w-full p-5 bg-white shadow-md">
              <h1>{dataLink.data.title}</h1>
              {dataLink.data.url[0].hd != null && (
                <a href={dataLink.data.url[0].hd} target="_blank">
                  <Btn className="bg-emerald-600 hover:bg-emerald-800 ring-emerald-500 w-full">
                    Download Mp4 / 1080p / HD
                  </Btn>
                </a>
              )}
              {dataLink.data.url[1].sd != null && (
                <a href={dataLink.data.url[1].sd} target="_blank">
                  <Btn className="bg-emerald-600 hover:bg-emerald-800 ring-emerald-500 w-full">
                    Download Mp4 / 720p / SD
                  </Btn>
                </a>
              )}
            </div>
          </div>
        ) : (
          <Decription />
        )}
        {/* end Data Video and audio and decription  */}
      </Container2>

      <Tutorial name="TikTok" bg="bg-slate-600" text="text-slate-600" />

      <Footer />
    </>
  );
}
