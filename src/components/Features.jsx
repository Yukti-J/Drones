import carousel from "../carousel";
import { useEffect, useState } from "react";

const Features = () => {
  const [idx, setIdx] = useState(0);

  const slider = (i) => {
    setIdx((i + 1) % carousel.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      slider(idx);
    }, 2500);
    return () => clearInterval(intervalId);
  }, [idx]); // Trigger effect whenever idx changes

  return (
    <div className="my-16 mb-20 md:mb-60">
      <img className="m-auto" src={carousel[idx].image} alt={carousel[idx].title} />
      <p className={`-mt-14  mx-16 md:-mt-28 md:mx-24 lg:-mt-36 lg:mx-34 font-rubik md:text-2xl md:text-5xl lg:text-6xl drop-shadow-lg font-bold border-l-4 px-3 ${carousel[idx].title === 'HEAVY PAYLOAD' ? 'text-black border-black' : 'text-white'}`}>{carousel[idx].title}</p>
    </div>
  );
};

export default Features;
