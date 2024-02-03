import React from "react";
import { FaChevronDown } from "react-icons/fa";

const MyAccountDropDown = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex justify-between mt-4 pb-3 border-b border-b-slate-300">
      <div>
        <p className="text-sm font-medium">{title}</p>
        <span className="text-xs opacity-60">{subtitle}</span>
      </div>
      <div>
        <FaChevronDown className="opacity-50" />
      </div>
    </div>
  );
};

export default MyAccountDropDown;
