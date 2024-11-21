import useApp from "../useApp";

export default function Tablecloths() {
  const { luckyColor } = useApp();

  return (
    <div className="absolute top-0 right-0 w-[28%]">
      {luckyColor && (
        <img
          src={`/images/cat-${luckyColor + 1}.png`}
          className="absolute top-[15%] left-1/2 w-1/3"
        />
      )}
      <img src="/images/tablecloths.png" className="w-full h-full" />
    </div>
  );
}
