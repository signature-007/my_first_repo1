import React from "react";

function Marquee() {
  return (
    <div className="w-full rounded-t-3xl py-24 bg-[#06463d]">
      <div className="text border-t-2 border-b-2 border-zinc-500 flex leading gap-10  whitespace-nowrap">
        <h1 className="text-[16.5vw]  leading-none font-['founders_grotesk_x_condensed'] uppercase font-bold pt-10 -mb-[7vw] pb-8 -mt-4">
          we are ochi
        </h1>
        <h1 className="text-[16.5vw] leading-none font-['founders_grotesk_x_condensed'] uppercase font-bold pt-10 -mb-[7vw] pb-8 -mt-4">
          we are ochi
        </h1>
      </div>
    </div>
  );
}

export default Marquee;
