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

export default function Instagram() {
  const [link, setLink] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataLink, setDataLink] = useState({});

  const download = () => {
    event.preventDefault();
    setLoading(true);
    axios({
      method: "GET",
      url: "https://api.febrita.biz.id/downloader/instagram?url=" + link,
    })
      .then((response) => {
        console.log(response.data);
        setDataLink(response.data);
      })
      .catch((error) => {
        console.log(error);
        swal({
          icon: "error",
          title: "Download Failed",
          text: "Please Check link or your connection",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Header className="bg-purple-600" />
      <Container2 className="bg-gradient-to-br from-indigo-700 to-pink-600">
        <Title className="py-10 text-white">Download Video Instagram</Title>
        <form onSubmit={download} className="container mx-auto px-5">
          <Input
            className="outline-purple-600"
            value={link}
            setValue={(e) => setLink(e.target.value)}
          />
          <Btn className="bg-emerald-600 ring-emerald-500">
            {loading ? <LoadingButton /> : "Download"}
          </Btn>
        </form>

        {Object.keys(dataLink).length != 0 ? (
          <div className=" container mx-auto px-5 mt-10">
            <div className="w-full p-5 bg-white shadow-md">
              <div className="bg-black w-full border border-slate-600">
                <img
                  src={dataLink.data[0].thumbnail}
                  alt="thumbnail"
                  className="w-5/12 mx-auto"
                />
              </div>
              {dataLink.data[0].url != null && (
                <a href={dataLink.data[0].url} target="_blank">
                  <Btn className="bg-emerald-600 hover:bg-emerald-800 ring-emerald-500 w-full">
                    Download Mp4
                  </Btn>
                </a>
              )}
            </div>
          </div>
        ) : (
          <Decription />
        )}
      </Container2>

      <Tutorial name="Instagram" bg="bg-purple-600" text="text-purple-600" />

      <Footer />
    </>
  );
}
