import useApp from "../useApp";

export default function Claw() {
  const { chanceCount } = useApp();

  return (
    <div className="pointer-events-none text-right">
      <img
        src="/images/test-tubes.png"
        className="w-[30%] absolute bottom-2 right-20"
      />
      <img
        src="/images/liquid.png"
        className="w-[30%] absolute bottom-2 right-20"
        style={{ opacity: chanceCount > 10 ? 1 : chanceCount / 10 }}
      />
      <img
        src="/images/claw.png"
        className="w-[35%] absolute bottom-0 right-0"
      />
    </div>
  );
}
