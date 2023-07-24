import React from "react";

const Card = (props) => {
    const {icon, title, datetime, desc} = props;
  return (
    <div className="bg-white rounded p-5 justify-between flex">
      <div className="icon-card me-5">
        <img src={icon} alt="" />
      </div>
      <div className="description-card">
        <div className="flex justify-between text-blue-500">
          <h2 className="text-2xl text-blue-500 font-bold">{title}</h2>
          <p className="font-semibold">{datetime}</p>
        </div>

        <div className="my-5">
          <ol className="list-decimal">
            <li className="mb-3">
              Calon peserta diminta untuk mengisi formulir pendaftaran online
              yang berisi informasi pribadi, <br /> kontak, dan rincian tim pada{" "}
              <span className="cursor-pointer text-blue-500">link berikut</span>
            </li>
            <li className="mb-3">
              Selain itu, peserta juga diharapkan mengunggah ringkasan rencana
              bisnis mereka <br /> yang mencakup visi, misi, strategi, dan
              analisis pasar
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Card;
