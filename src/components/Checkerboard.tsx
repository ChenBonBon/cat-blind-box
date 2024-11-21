import useApp from "../useApp";
import CheckerItem from "./Checker";

export default function Checkerboard() {
  const { checkerboard, lastRoundCheckerBoard } = useApp();

  return (
    <div className="px-12 mt-4">
      <div className="grid grid-rows-3 grid-cols-3 justify-items-center items-center bg-checkerboard bg-cover bg-top bg-no-repeat aspect-square">
        {checkerboard.map((item, index) => {
          return (
            <CheckerItem
              key={index}
              value={item}
              lastValue={lastRoundCheckerBoard[index]}
            />
          );
        })}
      </div>
    </div>
  );
}
