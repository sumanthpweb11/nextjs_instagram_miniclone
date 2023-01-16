import React from "react";

const HeaderIcon = ({ Icon, name }) => {
  return (
    <div className="hover:bg-gray-100 transition rounded cursor-pointer p-2">
      <Icon className=" text-black hover:text-white" size={25} />
    </div>
  );
};

export default HeaderIcon;
