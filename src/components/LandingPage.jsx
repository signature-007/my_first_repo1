import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-44 px-20">
        {["we create", "eye-opening", "presentations"].map((items, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-center overflow-hidden">
                {index === 1 && (
                  <div className="mask_image mr-[1vw] top-[0.1vw] rounded-md w-[8vw] h-[3.8vw] bg-green-500 relative "></div>
                )}
                <h1 className="mask_context uppercase tracking-tighter text-[5vw] leading-[4.7vw] font-['tahoma'] font-bold">
                  {items}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="line border-t-2 border-zinc-700 mt-24 flex justify-between items-center py-3 px-20 text-md ">
        {[
          "presentation and storytelling agency",
          "For innovation terms and global brands",
        ].map((items, index) => {
          return (
            <p
              className="text-md font-light tracking-tight leading-none"
              key={index}
            >
              {items}
            </p>
          );
        })}
        <div className="start flex items-center gap-1">
          <div className="uppercase border-[2px] border-zinc-500 rounded-full py-1 px-5 ">
            start the project
          </div>
          <div className="arrowicon w-11 h-11 border-[2px] flex items-center justify-center border-zinc-500 rounded-full ">
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
