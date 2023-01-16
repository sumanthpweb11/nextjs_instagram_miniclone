import Link from "next/link";
import React, { useState } from "react";
import { MdHomeFilled, MdOutlineExplore } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import Modal from "../Modal";

const Sidebar = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="sidebar   min-h-screen w-[3.35rem]  sm:w-[3.35rem] sm:overflow-hidden   md:w-56 overflow-hidden border-r bg-white hover:shadow-lg">
          <div className="flex h-screen flex-col justify-between pt-2 pb-6">
            <div>
              <div className="w-max p-2.5 text-center flex items-center justify-start">
                <h1 className="hidden md:block text-xl font-semibold tracking-wider cursor-pointer select-none text-center">
                  Instagram
                </h1>
              </div>
              <ul className="mt-6 space-y-2 tracking-wide">
                <li className="min-w-max">
                  <Link
                    href="#"
                    aria-label="dashboard"
                    className="relative flex items-center space-x-4  px-4 py-3"
                  >
                    <MdHomeFilled size={30} />
                    <span className="-mr-1 font-bold">Home</span>
                  </Link>
                </li>
                <li className="min-w-max">
                  <Link
                    href="#"
                    className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600"
                  >
                    <BiSearch
                      onClick={() => setOpenModal(true)}
                      size={30}
                      color="black"
                    />
                    <span className="group-hover:text-gray-700 font-bold">
                      {/* <input
                        className="w-[70%] placeholder:text-bold placeholder:text-black"
                        type="text"
                        placeholder="Search"
                      /> */}
                      Search
                    </span>
                  </Link>
                </li>
                <li className="min-w-max">
                  <Link
                    href="#"
                    className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                  >
                    <MdOutlineExplore size={30} color="black" />
                    <span className="group-hover:text-gray-700 font-bold">
                      Explore
                    </span>
                  </Link>
                </li>
                <li className="min-w-max">
                  <a
                    href="#"
                    className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        className="fill-current text-gray-600 group-hover:text-cyan-600"
                        d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                      />
                      <path
                        className="fill-current text-gray-300 group-hover:text-cyan-300"
                        d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                      />
                    </svg>
                    <span className="group-hover:text-gray-700">
                      Other data
                    </span>
                  </a>
                </li>
                <li className="min-w-max">
                  <a
                    href="#"
                    className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        className="fill-current text-gray-300 group-hover:text-cyan-300"
                        d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                      />
                      <path
                        className="fill-current text-gray-600 group-hover:text-cyan-600"
                        fill-rule="evenodd"
                        d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="group-hover:text-gray-700">Finance</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className="w-max -mb-3">
              <a
                href="#"
                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 group-hover:fill-cyan-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="group-hover:text-gray-700">Settings</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>

      <Modal openModal={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default Sidebar;
