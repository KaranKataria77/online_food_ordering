import React, { ReactNode } from "react";

const HomeFooterCard = ({ Icon, name }: { Icon: ReactNode; name: string }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {Icon}
      <span style={{ fontSize: 10 }} className="font-extrabold pt-2">
        {name}
      </span>
    </div>
  );
};

export default HomeFooterCard;
