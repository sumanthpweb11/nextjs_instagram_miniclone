import React from "react";
import { BiSearch } from "react-icons/bi";
import { Home, Explore, Heart, Profile } from "../Header/HeaderIcons/index";
import HeaderIcon from "../../components/Header/HeaderIcon/index";

const Header = () => {
  const HEADER_ITEMS = [
    {
      icon: Home,
      url: "/",
      name: "Home",
    },
    {
      icon: Explore,
      url: "/explore",
      name: "Explore",
    },
    {
      icon: Heart,
      url: "/like",
      name: "Heart",
    },
    {
      icon: Profile,
      url: "/like",
      name: "Profile",
    },
  ];

  return (
    <header className="w-full border  flex justify-around  items-center h-16 bg-white shadow-md  ">
      {/* <Link href="/">
          <div className="text-xl font-semibold tracking-wider cursor-pointer select-none">
            Instagram
          </div>
        </Link> */}
      <div className="flex items-center group space-x-4 bg-gray-100 border-gray-400 rounded-lg px-2">
        <label htmlFor="search" className="group-active:border-gray-400">
          <BiSearch size={20} className="text-gray-400" />
        </label>

        <input
          placeholder="search"
          type="search"
          name="search"
          id="search"
          className="bg-gray-100  hover:bg-transparent focus:bg-transparent w-full placeholder:text-sm py-1 px-2  outline-none rounded-sm transition focus:border-gray-400"
        />
      </div>
      <div className="flex space-x-2 items-center">
        <div className="flex space-x-4 p-2">
          {HEADER_ITEMS.map((item) => {
            return <HeaderIcon Icon={item.icon} key={item.name} />;
          })}
        </div>
        <button className="bg-[#0095F6] py-1 px-6 h-4/5 text-white active:scale-95 transform transition  rounded hover:bg-[#047ccc] disabled:bg-opacity-40 disabled:scale-100 text font-semibold ">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
