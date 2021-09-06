import React from "react";

const Button = ({ children }) => {
  const [isHover, setIsHover] = React.useState(false);
  console.log('isHover', isHover)
  return (
    <div
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      className={[
        "cursor-pointer text-white flex w-32 h-16 items-center justify-center bg-no-repeat bg-contain",
        isHover ? "bg-btn-hover" : "bg-btn-outline",
      ].join(" ")}
    >
      {children}
    </div>
  );
};

export default Button;
