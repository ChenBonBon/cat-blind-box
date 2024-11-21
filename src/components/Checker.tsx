import { Checker } from "../store";

interface CheckerProps {
  value: Checker;
  lastValue: Checker;
}

export default function CheckerItem(props: CheckerProps) {
  const { value, lastValue } = props;

  if (value !== null) {
    return <img src={`/images/cat-${value + 1}.png`} className="w-3/4" />;
  }

  if (value === null && lastValue === null) {
    return <span></span>;
  }

  if (value === null && lastValue !== null) {
    return (
      <img
        src={`/images/cat-${lastValue + 1}.png`}
        className="w-3/4 opacity-0 transition-opacity duration-500"
      />
    );
  }
}
