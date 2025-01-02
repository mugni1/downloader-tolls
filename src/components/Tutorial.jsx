import { Container2 } from "./Container";
import { Title } from "./Title";
import PropTypes from "prop-types";

Tutorial.propTypes = {
  name: PropTypes.string,
  bg: PropTypes.string,
  text: PropTypes.string,
};

export function Tutorial({ name, bg, text }) {
  return (
    <Container2>
      <Title className="text-slate-700 pt-10 pb-5">Unduh Video {name}</Title>
      <p className="px-5 text-center">
        Kami menawarkan layanan gratis untuk unduh video {name} tanpa watermark.
        Dapatkan video dengan resolusi HD dalam format MP4, dan dapatkan juga
        mp3, Ikuti petunjuk mudah kami untuk menggunakan pengunduh video.{" "}
      </p>
      <Title className={`${text} pt-5`}>Berikut cara melakukannya</Title>
      <div className={`mx-5 p-5 rounded-lg text-white ${bg}`}>
        <ul className="list-decimal px-5">
          <li className="text-lg">
            Buka video di aplikasi {name} pada ponsel Anda dan ketuk &apos;
            <b>Bagikan</b>&apos;.
          </li>
          <li className="text-lg">
            Pilih &apos;<b>Salin Tautan</b>&apos; dan tempelkan pada situs web
            kami.
          </li>
          <li className="text-lg">
            Tentukan pilihan Anda antara format MP4 atau MP3, lalu klik &apos;
            <b>Download</b>&apos;.
          </li>
        </ul>
      </div>
    </Container2>
  );
}
