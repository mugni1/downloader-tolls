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

export default function TikTok() {
  const [link, setLink] = useState(null);
  const [loading, setLoading] = useState(false);
  //https://www.tiktok.com/@straitstimes/video/7435499461855546631?is_from_webapp=1&sender_device=pc
  const [dataLink, setDataLink] = useState({});

  const download = () => {
    event.preventDefault();
    setLoading(true);
    axios({
      method: "GET",
      url: "https://api.febrita.biz.id/downloader/tiktok?url=" + link,
    })
      .then((response) => {
        console.log(response.data);
        setDataLink(response.data);
      })
      .catch((error) => {
        swal({
          icon: "error",
          title: "Download Failed",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Header className="bg-slate-600" />
      <Container2 className="bg-slate-600">
        <Title className="py-10">Download Video TikTok</Title>
        <form onSubmit={download} className="container mx-auto px-5">
          <input
            className="w-full p-1 outline-none mb-2"
            type="text"
            placeholder="Tempel Link disini"
            onChange={(e) => setLink(e.target.value)}
            required
          />
          <Btn className="bg-emerald-600 ring-emerald-500">
            {loading ? "Loading..." : "Download"}
          </Btn>
        </form>

        {Object.keys(dataLink).length != 0 ? (
          <div className=" container mx-auto px-5 mt-10">
            <div className="w-full p-5 bg-white shadow-md">
              <img
                src={dataLink.data.thumbnail}
                alt="thumbnail"
                className="w-full"
              />
              <h1>{dataLink.data.title}</h1>
              <h1 className="font-semibold">Creator : {dataLink.data.name}</h1>
              {dataLink.data.mp4 != null && (
                <a href={dataLink.data.mp4} target="_blank">
                  <Btn className="bg-emerald-600 hover:bg-emerald-800 ring-emerald-500 w-full">
                    Download Mp4
                  </Btn>
                </a>
              )}
              {dataLink.data.mp3 != null && (
                <a href={dataLink.data.mp3} target="_blank">
                  <Btn className="bg-emerald-600 hover:bg-emerald-800 ring-emerald-500 w-full">
                    Download Mp3
                  </Btn>
                </a>
              )}
            </div>
          </div>
        ) : (
          <Decription />
        )}
      </Container2>

      <Tutorial name="TikTok" bg="bg-slate-600" text="text-slate-600" />

      <Footer />
    </>
  );
}
