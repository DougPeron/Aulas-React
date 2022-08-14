import { useEffect, useState } from "react";

function Timer() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((currentValue) => currentValue + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <span className=" bg-red-300 p-3">{value}</span>;
}

export default Timer;
