import React from "react";
import ArrowButton from "./arrowButton";
import Image from "next/image";

const Card = ({ title, icon, text, buttonText, className }) => {
  return (
    <div className={["relative p-8 bg-card rounded-lg", className].join(' ')}>
      <div className="flex items-end justify-between">
        <div className="text-white text-2xl font-black mb-4">{title}</div>
        <Image alt="card-icon" src={icon} width={150} height={150} />
      </div>
      <div className="text-white text-base mb-4">{text}</div>
      <ArrowButton>{buttonText}</ArrowButton>
    </div>
  );
};

export default Card;
