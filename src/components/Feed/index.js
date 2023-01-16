import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

const Feed = () => {
  return (
    <>
      <div className="flex bg-[#FAFAFA]">
        {/* LEFT SIDEBAR */}
        <Sidebar />

        {/* MAIN RIGHT CONTAINER  */}
        <div className="w-full">
          {/* top header */}
          <Header />

          {/* POSTS AND STORIES SECTION */}
          <div className="grid w-full max-w-screen-large grid-cols-3 gap-6 mt-20 mx-auto  ">
            {/* posts and stories div */}
            <div className="w-full col-span-2 bg-slate-500 flex flex-col space-y-5">
              <section className="bg-white border overflow-x-scroll flex space-x-4 items-center justify-center border-gray-400 p-4">
                {new Array(12).fill(0).map((_, i) => {
                  return (
                    <div
                      key={i}
                      className="rounded-full w-14 h-14 ring-pink-500 ring-1 ring-offset-2  bg-black/60 flex-none"
                    ></div>
                  );
                })}
              </section>
              <section>posts</section>
            </div>

            {/* Right sidebar div */}
            <div className="col-span-1 bg-red-600">Right Sidebar</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
