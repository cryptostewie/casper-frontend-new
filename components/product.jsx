import React from "react";
import Button from "./button";
import Image from "next/image";

const Product = ({ direction, image, title, text, buttonText, classNameImage, classNameDesc }) => {
  return (
    <div className="grid grid-cols-2 text-white relative gap-24">
      {direction === "left" ? (
        <>
          <Image
            src={image}
            alt="product-image"
            width={1000}
            height={1000}
            className={["col-span-1", classNameImage].join(' ')}
          />
          <div className={["flex flex-col space-y-8 col-span-1 justify-center", classNameDesc].join(' ')}>
            <div className="text-5xl font-bold">{title}</div>
            <div>{text}</div>
            <Button>{buttonText}</Button>
          </div>
        </>
      ) : (
        <>
          <div className={["flex flex-col space-y-8 col-span-1 justify-center", classNameDesc].join(' ')}>
            <div className="text-5xl font-bold">{title}</div>
            <div>{text}</div>
            <Button>{buttonText}</Button>
          </div>
          <Image
            src={image}
            alt="product-image"
            width={1000}
            height={1000}
            className={["col-span-1", classNameImage].join(' ')}
          />
        </>
      )}
    </div>
  );
};

export default Product;
