import { useState } from "react";
import "./App.css";
import logo from "./assets/Navbarbrand.png";
import card from "./assets/card.png";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiOutlineWhatsApp } from "react-icons/ai";
import icon from "./assets/Card Icon.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";

import logoMark from "./assets/logo-mark.png";
import Button from "./components/Button";
import Team from "./assets/Team 1.png";
import Team2 from "./assets/team2.png";
import Team3 from "./assets/team3.png";
import Team4 from "./assets/team4.png";
import Team5 from "./assets/team5.png";
import Team6 from "./assets/team6.png";

import CardTeam from "./components/CardTeam";
import logoMark2 from "./assets/mark2.png";
import logoMark3 from "./assets/mark3.png";
import logoMark4 from "./assets/mark4.png";
import logoMark5 from "./assets/mark5.png";
import logoMark6 from "./assets/mark6.png";

function App() {
  return (
    <div>
      {/* navbar */}
      <nav className="p-2.5 bg-blue-600 ">
        <div className="container md:flex md:justify-between mx-auto">
          <span className="cursor-pointer mx-3">
            <img src={logo} alt="" />
          </span>

          <ul className="md:flex items-center text-xl">
            <li className="mx-4 text-white">
              <a href="">About</a>
            </li>
            <li className="mx-4 text-white">
              <a href="">Mechanism</a>
            </li>
            <li className="mx-4 text-white">
              <a href="">Latest Update</a>
            </li>

            <button className="mx-5 px-8 py-3 bg-white rounded-full text-blue-800">
              Register
            </button>
          </ul>
        </div>
      </nav>

      {/* hero section */}
      <div className="hero-section flex items-center justify-center">
        <div className="text-center">
          <h3 className="mb-5 font-semibold text-2xl text-white">
            Detikfinance Business Plan Competition 2023
          </h3>
          <h1 className="mb-3 font-bold text-white text-5xl">
            EMPOWERING INDONESIA STARTUP
          </h1>
          <p className="text-white font-semibold mb-5">
            Detikfinance memberikan ruang kepada para startup di Indonesia untuk
            menunjukkan, serta mempromosikan <br /> brand mereka untuk
            mendapatkan perhatian dari venture capital atau angel investor
          </p>
          <Button children="Daftarkan startup kamu" />
        </div>
      </div>

      {/* card mekanism */}
      <div className="mekanis-section bg-white md:flex md:items-center md:justify-center my-5">
        <div className="flex items-center">
          <div className="card-image me-10">
            <img src={card} alt="" />
          </div>
          <div className="card-desc">
            <h4 className="text-blue-600 mb-5 font-bold text-xl">
              About Detikfinance Business Plan Competition 2023
            </h4>
            <p>
              Detikfinance kali ini akan memberikan ruang bagi startup untuk
              networking dan <br /> memamerkan produk inovasinya di hadapan
              venture capital dan angel investor. <br /> Acara ini juga akan
              menghadirkan para pengembang teknologi dan pelaku bisnis <br />{" "}
              untuk memberikan edukasi dan inspirasi bagi masyarakat Indonesia
              dan teknofilia <br /> mengenai perkembangan teknologi di
              Indonesia.
            </p>

            <div className="share my-5 flex items-center">
              <a href="" className="text-blue-600 me-4">
                Share
              </a>
              <AiFillTwitterCircle className="text-blue-600 me-4 text-xl" />
              <AiOutlineWhatsApp className="text-blue-600 me-4 text-xl" />
              <BsFacebook className="text-blue-600 text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* card section */}
      <div className="mekanisme-card flex items-center justify-center">
        <div>
          <h1 className="text-white font-bold text-5xl text-start mb-10 mt-20">
            Mekanisme
          </h1>

          <div className="bg-white rounded p-5 justify-between flex mb-5">
            <div className="icon-card me-5">
              <img src={icon} alt="" />
            </div>
            <div className="description-card">
              <div className="flex justify-between text-blue-500">
                <h2 className="text-2xl text-blue-500 font-bold">Registrasi</h2>
                <p className="font-semibold">1 - 30 January 2023</p>
              </div>

              <div className="my-5">
                <ol className="list-decimal">
                  <li className="mb-3">
                    Calon peserta diminta untuk mengisi formulir pendaftaran
                    online yang berisi informasi pribadi, <br /> kontak, dan
                    rincian tim pada{" "}
                    <span className="cursor-pointer text-blue-500">
                      link berikut
                    </span>
                  </li>
                  <li className="mb-3">
                    Selain itu, peserta juga diharapkan mengunggah ringkasan
                    rencana bisnis mereka <br /> yang mencakup visi, misi,
                    strategi, dan analisis pasar
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="bg-white rounded p-5 justify-between flex mb-5">
            <div className="icon-card me-5">
              <img src={icon2} alt="" />
            </div>
            <div className="description-card">
              <div className="flex justify-between text-blue-500">
                <h2 className="text-2xl text-blue-500 font-bold">
                  Seleksi Peserta
                </h2>
                <p className="font-semibold">1 - 7 Februari 2023</p>
              </div>

              <div className="my-5">
                <ol className="list-decimal">
                  <li className="mb-3">
                    Tim seleksi akan meninjau setiap pendaftaran dan
                    mengevaluasi kualitas dan kelayakan bisnis <br /> plan yang
                    diajukan
                  </li>
                  <li className="mb-3">
                    Kriteria evaluasi dapat mencakup inovasi, potensi
                    pertumbuhan, kelayakan keuangan, dan <br /> kejelasan
                    presentasi
                  </li>
                  <li className="mb-3">
                    Peserta yang memenuhi persyaratan seleksi akan dipilih
                    sebagai finalis dan berhak melanjutkan <br /> ke tahap
                    berikutnya
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="bg-white rounded p-5 justify-between flex mb-5">
            <div className="icon-card me-5">
              <img src={icon3} alt="" />
            </div>
            <div className="description-card">
              <div className="flex justify-between text-blue-500">
                <h2 className="text-2xl text-blue-500 font-bold">
                  Pengumuman Peserta Terpilih
                </h2>
                <p className="font-semibold">8 February 2023</p>
              </div>

              <div className="my-5">
                <ol className="list-decimal">
                  <li className="mb-3">
                    Pengumuman finalis akan dilakukan melalui email
                  </li>
                  <li className="mb-3">
                    Finalis akan diinformasikan tentang jadwal presentasi dan
                    persiapan yang diperlukan
                  </li>
                  <li className="mb-3">
                    Pada acara pengumuman pemenang, setiap finalis akan
                    mempresentasikan rencana bisnis <br /> mereka di hadapan
                    panel juri
                  </li>
                  <li className="mb-3">
                    Setelah presentasi, panel juri akan melakukan evaluasi dan
                    mengumumkan pemenang <br /> kompetisi business plan
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* marque shows */}
      <div
        className="marque bg-blue-50 items-center
      justify-center"
      >
        <div>
          <h2 className="text-xl font-semibold text-blue-600 text-center my-5">
            Dapatkan Kesempatan Dilirik oleh Venture Capital / Angel Investor{" "}
            <br />
            Serta Menjadi Narasumber di Detikfinance
          </h2>
        </div>

        <div className="logo-mark mt-5">
          <ul className="flex">
            <li className="mx-4">
              <img src={logoMark} alt="" />
            </li>
            <li className="mx-4">
              <img src={logoMark2} alt="" />
            </li>
            <li className="mx-4">
              <img src={logoMark3} alt="" />
            </li>
            <li className="mx-4">
              <img src={logoMark4} alt="" />
            </li>
            <li className="mx-4">
              <img src={logoMark5} alt="" />
            </li>
            <li className="mx-4">
              <img src={logoMark6} alt="" />
            </li>
          </ul>
        </div>
        <div className="text-center my-5">
          <Button children="Daftarkan startup kamu" />
        </div>
      </div>

      {/* card-team */}
      <div className="bg-blue-50 flex">
        <div>
          <h1 className="text-blue-700 text-2xl font-semibold text-start ml-32">
            LATEST UPDATE
          </h1>

          <div className="flex flex-wrap justify-center">
            <CardTeam
              foto={Team}
              title={
                <>
                  Alpha JWC Ventures Suntikkan Dana <br /> Segar kepada
                  OnlinePajak dan Stoqo
                </>
              }
              date="1 hari lalu"
            />
            <CardTeam
              foto={Team2}
              title={
                <>
                  Startup Lifepack Rampungkan Pendanaan Seri <br /> A yang
                  Dipimpin Golden Gate Ventures
                </>
              }
              date="1 hari lalu"
            />
            <CardTeam
              foto={Team3}
              title={
                <>
                  Angel Investor Adalah? Berikut Jenis, Contoh <br /> dan Cara
                  Mendapatkannya
                </>
              }
              date="1 hari lalu"
            />

            <CardTeam
              foto={Team4}
              title={
                <>
                  Crowe Indonesia Gelar Diskusi terkait Valuasi <br /> Startup &
                  Laporan ESG
                </>
              }
              date="1 hari lalu"
            />
            <CardTeam
              foto={Team5}
              title={
                <>
                  Startup Fresh Factory Bangun Ratusan Gudang <br /> Dingin di
                  103 Kota
                </>
              }
              date="1 hari lalu"
            />
            <CardTeam
              foto={Team6}
              title={
                <>
                  Startup Pertanian RI Dapat Pendanaan Awal, <br /> Totalnya Rp
                  90 M
                </>
              }
              date="1 hari lalu"
            />
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="bg-blue-600 text-white flex items-center py-6">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b-2 my-5">
            <img src={logo} alt="logo" className="mb-5" />
            <div className="justify-between flex items-center">
              <p className="text-sm mb-6 font-semibold">
                Detikfinance memberikan ruang kepada para startup di Indonesia
                untuk menunjukkan, serta <br /> mempromosikan brand mereka untuk
                mendapatkan perhatian dari venture capital atau angel investor
              </p>
              <div className="share flex">
                <AiFillTwitterCircle className="text-white me-4 text-xl" />
                <AiOutlineWhatsApp className="text-white me-4 text-xl" />
                <BsFacebook className="text-white text-xl" />
              </div>
            </div>
          </div>

          <p className="font-light mb-5 mt-9">
            © 2023 Detikcom. All rights reserved
          </p>
        </div>
      </footer>

      
    </div>
  );
}

export default App;
