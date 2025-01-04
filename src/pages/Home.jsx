import { Btn } from "../components/Button";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { Title } from "../components/Title";
import { LogoSosmed } from "../components/LogoAndNameSosmed";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkMode";

export default function Home() {
  // use context
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
  return (
    <>
      <div
        className={`w-full py-3 fixed px-5 container mx-auto transition-all duration-700 shadow-md ${
          isDarkMode ? "bg-slate-600" : "bg-white"
        }`}
      >
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`px-5 py-1 ${
            isDarkMode ? "bg-white text-slate-600" : "bg-slate-600 text-white"
          } rounded-md font-semibold`}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
      </div>
      <Container
        className={`${
          isDarkMode ? "text-white bg-slate-800" : "text-slate-800 bg-white"
        } transition-all duration-700`}
      >
        <div className=" w-full px-5">
          <Title>Selamat Datang</Title>
          <p className="text-center">
            Kami menawarkan layanan gratis untuk <b>UNDUH</b> video atau sound
            <b> YouTube,</b> <b>TikTok,</b> <b>Instagram</b> dan <b>Twitter</b>{" "}
            tanpa <b>watermark</b>. Dapatkan video dengan resolusi HD dalam
            format MP4, dan dapatkan juga music yang jernih dalam format MP3
            (jika tersedia).
          </p>

          {/* Pilih sosmed  */}
          <section className="w-full flex flex-wrap mt-10 justify-center gap-5">
            <div>
              <LogoSosmed srcImg="/youtube-icon-svgrepo-com.svg">
                Youtube
              </LogoSosmed>
              <Link to="/youtube">
                <Btn className="bg-red-600 ring-red-500">Get Started</Btn>
              </Link>
            </div>
            <div>
              <LogoSosmed srcImg="/brand-tiktok-sq-svgrepo-com.svg">
                Tiktok
              </LogoSosmed>
              <Link to="/tiktok">
                <Btn className="bg-gradient-to-br from-sky-600 via-slate-800 to-red-600 ring-slate-800">
                  Get Started
                </Btn>
              </Link>
            </div>
            <div>
              <LogoSosmed srcImg="/instagram-1-svgrepo-com (1).svg">
                Instagram
              </LogoSosmed>
              <Link to="/instagram">
                <Btn className="bg-gradient-to-br from-indigo-600 to-pink-600 ring-purple-800">
                  Get Started
                </Btn>
              </Link>
            </div>
            <div>
              <LogoSosmed srcImg="/twitter-color-svgrepo-com.svg">
                Twitter / X
              </LogoSosmed>
              <Link to="/twitter-x">
                <Btn className="bg-gradient-to-br from-sky-600 to-slate-600 ring-purple-800">
                  Get Started
                </Btn>
              </Link>
            </div>
            <div>
              <LogoSosmed srcImg="/terabox.webp">Terabox</LogoSosmed>
              <Btn className=" bg-sky-600  ring-sky-800">Segera hadir</Btn>
            </div>
          </section>
          {/* End Pilih sosmed  */}
        </div>
      </Container>
      <Footer />
    </>
  );
}
