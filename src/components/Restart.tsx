import useApp from "../useApp";

export default function Restart() {
  const { reset } = useApp();

  function handleRestart() {
    reset();
  }

  return (
    <img src="/images/restart.png" className="w-1/6" onClick={handleRestart} />
  );
}
