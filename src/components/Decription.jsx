import { Title } from "./Title";

export function Decription() {
  return (
    <section>
      <div className="text-white px-10 mb-5">
        <Title className="text-2xl pt-10">Akses Tanpa Batas</Title>
        <p className=" text-center">
          Nikmati kebebasan untuk download video sebanyak yang Anda inginkan,
          tanpa ada batasan.
        </p>
      </div>
      <div className="text-white px-10 mb-5">
        <Title className="text-2xl pt-10">MP4 dan MP3 Dalam HD </Title>
        <p className=" text-center">
          Unduh video HD, tersedia dalam MP4 atau konversi langsung ke audio
          MP3.
        </p>
      </div>
    </section>
  );
}
