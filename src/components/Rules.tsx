import { useState } from "react";

export default function Rules() {
  const [rulesVisible, setRulesVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleRules() {
    setRulesVisible(!rulesVisible);
  }

  function handleChangePage() {
    setCurrentIndex(currentIndex === 0 ? 1 : 0);
  }

  if (rulesVisible && currentIndex === 0) {
    return (
      <div
        className="absolute top-0 left-0 w-full h-full z-10 bg-white"
        onClick={handleChangePage}
      >
        <img
          src="/images/close.png"
          className="absolute top-4 left-4 w-8"
          onClick={handleRules}
        />
        <img src="/images/introduction-1.png" />
      </div>
    );
  }

  if (rulesVisible && currentIndex === 1) {
    return (
      <div
        className="absolute top-0 left-0 w-full h-full z-10 bg-white"
        onClick={handleChangePage}
      >
        <img
          src="/images/close.png"
          className="absolute top-4 left-4 w-8"
          onClick={handleRules}
        />
        <img src="/images/introduction-2.png" />
      </div>
    );
  }

  return (
    <img src="/images/rules.png" className="w-2/5" onClick={handleRules} />
  );
}
