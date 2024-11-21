import { useRef } from "react";
import useStore, { Checker } from "./store";

const colorList = [
  "骷髅咪",
  "石像咪",
  "木乃咪",
  "史莱姆咪",
  "丧尸咪",
  "幽灵咪",
  "恶魔咪",
  "天使咪",
  "僵尸咪",
  "滋咪咪",
];

const initColorMap = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
};

export default function useApp() {
  const checkersRef = useRef<Checker[]>([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const {
    luckyColor,
    luckyColorsVisible,
    colorsInBag,
    chanceCount,
    checkerboard,
    lastRoundCheckerBoard,
    music,
    setLuckyColor,
    setLuckyColorsVisible,
    setColorsInBag,
    setChanceCount,
    addChanceCount,
    reduceChance,
    setCheckerboard,
    setLastRoundCheckerBoard,
    setMusic,
  } = useStore();

  function getCount() {
    const blankCount = checkersRef.current.filter(
      (item) => item === null
    ).length;
    if (chanceCount > blankCount) {
      return blankCount;
    }

    return chanceCount;
  }

  function getNewCheckers(count: number) {
    const newCheckerboard = [...checkersRef.current];

    for (let i = 0, j = 0; i < newCheckerboard.length, j < count; i++) {
      const item = newCheckerboard[i];

      if (item === null) {
        newCheckerboard[i] = Math.floor(Math.random() * colorList.length);

        j++;
      }
    }

    return newCheckerboard;
  }

  function deal() {
    const count = getCount();
    const newCheckers: Checker[] = getNewCheckers(count);

    reduceChance(count);

    checkersRef.current = newCheckers;
    setLastRoundCheckerBoard(newCheckers);
    setCheckerboard(newCheckers);
  }

  function checkAllDifferent() {
    setTimeout(() => {
      const checkerSet = new Set(checkersRef.current);

      if (checkerSet.size === checkersRef.current.length) {
        checkersRef.current = new Array(9).fill(null);
        setCheckerboard(new Array(9).fill(null));
        addChanceCount(5);
      }
    }, 1000);
  }

  function checkRow(row: number) {
    setTimeout(() => {
      const checkers = checkersRef.current.slice(row * 3, (row + 1) * 3);

      if (new Set(checkers).size === 1 && checkers[0] !== null) {
        const newCheckers = [...checkersRef.current];

        for (let i = 0; i < 3; i++) {
          newCheckers[row * 3 + i] = null;
        }

        checkersRef.current = newCheckers;
        setCheckerboard(newCheckers);
        addChanceCount(5);
      }
    }, 1000);
  }

  function checkCol(col: number) {
    setTimeout(() => {
      const checkers = checkersRef.current.filter((_, index) => {
        return index % 3 === col;
      });

      if (new Set(checkers).size === 1 && checkers[0] !== null) {
        const newCheckers = [...checkersRef.current];

        for (let i = 0; i < 3; i++) {
          newCheckers[i * 3 + col] = null;
        }

        checkersRef.current = newCheckers;
        setCheckerboard(newCheckers);
        addChanceCount(5);
      }
    }, 1000);
  }

  function checkRows() {
    for (let i = 0; i < 3; i++) {
      checkRow(i);
    }
  }

  function checkCols() {
    for (let i = 0; i < 3; i++) {
      checkCol(i);
    }
  }

  function checkLeftTopToRightBottom() {
    setTimeout(() => {
      const checker1 = checkersRef.current[0];
      const checker2 = checkersRef.current[4];
      const checker3 = checkersRef.current[8];

      if (checker1 === checker2 && checker2 === checker3 && checker1 !== null) {
        const newCheckers = [...checkersRef.current];

        newCheckers[0] = null;
        newCheckers[4] = null;
        newCheckers[8] = null;

        checkersRef.current = newCheckers;
        setCheckerboard(newCheckers);
        addChanceCount(5);
      }
    }, 1000);
  }

  function checkRightTopToLeftBottom() {
    setTimeout(() => {
      const checker1 = checkersRef.current[2];
      const checker2 = checkersRef.current[4];
      const checker3 = checkersRef.current[6];

      if (checker1 === checker2 && checker2 === checker3 && checker1 !== null) {
        const newCheckers = [...checkersRef.current];

        newCheckers[2] = null;
        newCheckers[4] = null;
        newCheckers[6] = null;

        checkersRef.current = newCheckers;
        setCheckerboard(newCheckers);
        addChanceCount(5);
      }
    }, 1000);
  }

  function checkPairs() {
    const checkerIndex: number[][] = [];
    const clonedCheckers = [...checkersRef.current];

    for (let i = 0; i < 9; i++) {
      if (checkersRef.current[i] === null) {
        continue;
      }

      for (let j = i + 1; j < 9; j++) {
        if (checkersRef.current[i] === checkersRef.current[j]) {
          const newCheckers = [...checkersRef.current];

          newCheckers[i] = null;
          newCheckers[j] = null;

          checkersRef.current = newCheckers;
          checkerIndex.push([i, j]);

          break;
        }
      }
    }

    for (let i = 0; i < checkerIndex.length; i++) {
      const pair = checkerIndex[i];

      setTimeout(() => {
        clonedCheckers[pair[0]] = null;
        clonedCheckers[pair[1]] = null;

        setCheckerboard(clonedCheckers);
        addChanceCount(1);
      }, 1000 * i);
    }
  }

  function checkLuckyColor() {
    setTimeout(() => {
      if (luckyColor === null) {
        return;
      }

      const index = checkersRef.current.findIndex(
        (item) => item === luckyColor
      );

      if (index > -1) {
        const newCheckers = [...checkersRef.current];

        newCheckers[index] = null;
        checkersRef.current = newCheckers;

        setCheckerboard(newCheckers);
        addChanceCount(1);
      }
    }, 1000);
  }

  function checkEmpty() {
    setTimeout(() => {
      if (checkersRef.current.filter((item) => item === null).length === 0) {
        checkersRef.current = new Array(9).fill(null);
        setCheckerboard(new Array(9).fill(null));
        addChanceCount(10);
      }
    }, 1000);
  }

  function reset() {
    setLuckyColor(null);
    setLuckyColorsVisible(false);
    setColorsInBag(initColorMap);
    setChanceCount(0);
    setCheckerboard(new Array(9).fill(null));

    checkersRef.current = new Array(9).fill(null);
  }

  return {
    colorList,
    initColorMap,
    luckyColor,
    luckyColorsVisible,
    colorsInBag,
    chanceCount,
    checkerboard,
    lastRoundCheckerBoard,
    music,
    setLuckyColor,
    setLuckyColorsVisible,
    setColorsInBag,
    setChanceCount,
    addChanceCount,
    setCheckerboard,
    reset,
    setMusic,
    deal,
    checkAllDifferent,
    checkRows,
    checkCols,
    checkLeftTopToRightBottom,
    checkRightTopToLeftBottom,
    checkPairs,
    checkLuckyColor,
    checkEmpty,
  };
}
