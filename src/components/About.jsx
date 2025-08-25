import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-t-3xl  text-black">
      <h1 className="font-['neue_montreal'] text-[4vw] leading-[4vw] tracking-tight">
        We craft category-defining presentations, brand identities, and digital
        experiences that drive funding, sales, and market leadership.
      </h1>
      <div className="w-full flex gap-5 border-t-[0.2vw] pt-5 mt-20 border-[#92ae2b]">
        <div className="w-1/2 ">
          <h1 className="font-['neue_montreal'] text-6xl">How we can help:</h1>
          <button className="flex uppercase font-['neue_montreal'] mt-6 px-10 py-4 items-center gap-4 bg-zinc-900 text-zinc-50 rounded-full">
            read more
            <div className="bg-white w-2 h-2 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[60vh] bg-[#a1bc41] rounded-3xl "></div>
      </div>
    </div>
  );
}

export default About;
