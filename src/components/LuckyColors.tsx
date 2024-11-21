import useApp from "../useApp";

interface LuckyColorsProps {
  visible: boolean;
}

export default function LuckyColors(props: LuckyColorsProps) {
  const { visible } = props;

  const {
    colorList,
    luckyColor,
    setLuckyColor,
    setLuckyColorsVisible,
    setChanceCount,
  } = useApp();

  function handleClick(index: number) {
    if (luckyColor) {
      return false;
    }

    setLuckyColor(index);
    setTimeout(() => {
      setLuckyColorsVisible(false);
      setChanceCount(10);
    }, 200);
  }

  return (
    <dialog open={visible} className="h-4/5 top-[10%] bg-transparent">
      <div className="h-full bg-lucky-colors bg-cover bg-top bg-no-repeat">
        <div className="w-full h-full px-16 py-28 grid grid-rows-5 grid-cols-2 justify-items-center items-center">
          {colorList.map((item, index) => {
            return (
              <img
                key={item}
                src={`/images/cat-${index + 1}.png`}
                className="w-1/2"
                onClick={() => handleClick(index)}
              />
            );
          })}
        </div>
      </div>
    </dialog>
  );
}
