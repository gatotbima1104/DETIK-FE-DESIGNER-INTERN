import React from "react";

const CardTeam = (props) => {
    const {foto, title, date} = props;
  return (
    <div className="card-team p-3">
      <img src={foto} alt="" />
      <h2 className="font-bold">
        {title}
      </h2>
      <h5 className="font-light text-slate-500">{date}</h5>
    </div>
  );
};

export default CardTeam;
