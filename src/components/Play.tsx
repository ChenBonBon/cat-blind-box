import { toast } from "react-toastify";
import useApp from "../useApp";

export default function Play() {
  const {
    luckyColor,
    chanceCount,
    setLuckyColorsVisible,
    deal,
    checkAllDifferent,
    checkRows,
    checkCols,
    checkLeftTopToRightBottom,
    checkRightTopToLeftBottom,
    checkPairs,
    checkLuckyColor,
    checkEmpty,
  } = useApp();

  function play() {
    if (luckyColor === null) {
      setLuckyColorsVisible(true);
    } else {
      if (chanceCount === 0) {
        toast("已经没有剩余次数啦！");
        return;
      }

      deal();

      setTimeout(() => {
        checkAllDifferent();
        checkRows();
        checkCols();
        checkLeftTopToRightBottom();
        checkRightTopToLeftBottom();
        checkPairs();
        checkLuckyColor();
        checkEmpty();
      }, 1000);
    }
  }

  return <img src="/images/play.png" className="w-1/2 -mt-8" onClick={play} />;
}
