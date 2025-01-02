import { Btn } from "../components/Button";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { Title } from "../components/Title";

// tolls untuk donwnload video youtube, tiktok, intagram
export default function Home() {
  return (
    <>
      <Container>
        <div className=" w-full px-5">
          <Title className="text-slate-800">Selamat Datang</Title>
          <p className="text-center text-slate-800">
            Kami menawarkan layanan gratis untuk unduh video YouTube, TikTok dan
            Instagram tanpa watermark. Dapatkan video dengan resolusi HD dalam
            format MP4, dan dapatkan juga MP3
          </p>
          <section className="w-full flex flex-wrap mt-10 justify-center gap-5">
            <div>
              <p className="flex items-center gap-2">
                <img
                  src="/src/assets/youtube-168-svgrepo-com.svg"
                  className="h-5 w-5"
                  alt=""
                />
                <span>YouTube</span>
              </p>
              <Link to="/youtube">
                <Btn className="bg-red-600 ring-red-500">Get Started</Btn>
              </Link>
            </div>
            <div>
              <h1 className="flex items-center gap-2">
                <img
                  src="/src/assets/tiktok-svgrepo-com.svg"
                  className="h-5 w-5"
                  alt=""
                />
                <span>TikTok</span>
              </h1>
              <Link to="/tiktok">
                <Btn className="bg-gradient-to-br from-sky-600 via-slate-800 to-red-600 ring-slate-800">
                  Get Started
                </Btn>
              </Link>
            </div>
            <div>
              <h1 className="flex items-center gap-2">
                <img
                  src="/src/assets/instagram-1-svgrepo-com.svg"
                  className="h-5 w-5"
                  alt=""
                />
                <span>Instagram</span>
              </h1>
              <Link to="instagram">
                <Btn className="bg-gradient-to-br from-indigo-600 to-pink-600 ring-purple-800">
                  Get Started
                </Btn>
              </Link>
            </div>
          </section>
        </div>
      </Container>
      <Footer />
    </>
  );
}
