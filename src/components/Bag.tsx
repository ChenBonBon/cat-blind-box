import { useState } from "react";
import useApp from "../useApp";

export default function Bag() {
  const { colorsInBag } = useApp();

  const [bagVisible, setBagVisible] = useState(false);

  function handleBag() {
    setBagVisible(!bagVisible);
  }

  if (bagVisible) {
    return (
      <div className="absolute top-0 left-0 w-full h-full bg-bag bg-cover bg-top bg-no-repeat z-10">
        <img
          src="/images/close.png"
          className="absolute top-4 left-4 w-8"
          onClick={handleBag}
        />
        <span className="absolute bottom-[18%] right-[15%]">
          {colorsInBag[0]}
        </span>
        <span className="absolute bottom-[39%] right-[12%]">
          {colorsInBag[1]}
        </span>
        <span className="absolute top-[26%] left-[49%]">{colorsInBag[2]}</span>
        <span className="absolute top-[36%] right-[17%]">{colorsInBag[3]}</span>
        <span className="absolute bottom-[4%] left-[45%]">
          {colorsInBag[4]}
        </span>
        <span className="absolute top-[38%] left-[21%]">{colorsInBag[5]}</span>
        <span className="absolute top-[50%] left-[45%]">{colorsInBag[6]}</span>
        <span className="absolute top-[13%] right-[17%]">{colorsInBag[7]}</span>
        <span className="absolute bottom-[21%] left-[17%]">
          {colorsInBag[8]}
        </span>
        <span className="absolute bottom-[28%] left-[47%]">
          {colorsInBag[9]}
        </span>
      </div>
    );
  }

  return <img src="/images/bag.png" className="w-2/5" onClick={handleBag} />;
}
