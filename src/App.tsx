import { useEffect, useState } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Bag from "./components/Bag";
import Checkerboard from "./components/Checkerboard";
import Claw from "./components/Claw";
import Close from "./components/Close";
import LuckyColors from "./components/LuckyColors";
import Music from "./components/Music";
import Play from "./components/Play";
import Restart from "./components/Restart";
import Rules from "./components/Rules";
import Tablecloths from "./components/Tablecloths";
import useApp from "./useApp";

export default function App() {
  const { luckyColorsVisible } = useApp();

  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  function handleResize() {
    const { width, height } = window.screen;

    const ratio = height / width;

    if (ratio > 6488 / 3000) {
      setWidth(width);
      setHeight(width * (6488 / 3000));
    } else {
      setWidth(height * (3000 / 6488));
      setHeight(height);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="relative flex flex-col gap-2 bg-app bg-cover bg-top bg-no-repeat"
      style={{ width, height }}
    >
      <Music />
      <Tablecloths />
      <Checkerboard />
      <div className="flex justify-between items-center px-2">
        <Bag />
        <Rules />
      </div>
      <div className="flex justify-center items-center">
        <Play />
      </div>
      <div className="absolute left-2 bottom-2 flex items-end gap-4">
        <Restart />
        <Close />
      </div>
      <Claw />
      <LuckyColors visible={luckyColorsVisible} />
      <ToastContainer
        position="top-center"
        theme="dark"
        transition={Bounce}
        autoClose={3000}
        hideProgressBar={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
    </div>
  );
}
