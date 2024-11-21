import { useEffect, useRef } from "react";
import useApp from "../useApp";

export default function Music() {
  const { music, setMusic } = useApp();

  const audioRef = useRef<HTMLAudioElement | null>(null);

  function handleMusic() {
    setMusic(true);

    if (audioRef.current) {
      audioRef.current.play();
    }
  }
  function handleNoMusic() {
    setMusic(false);

    if (audioRef.current) {
      audioRef.current.pause();
    }
  }

  useEffect(() => {
    const audio = new Audio("/audio/background.wav");

    audioRef.current = audio;
  }, []);

  return (
    <>
      {music ? (
        <img
          src="/images/no-music.png"
          className="pt-2 pl-2 w-1/6"
          onClick={handleNoMusic}
        />
      ) : (
        <img
          src="/images/music.png"
          className="pt-2 pl-2 w-1/6"
          onClick={handleMusic}
        />
      )}
    </>
  );
}
