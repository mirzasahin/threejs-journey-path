import { useEffect, useMemo, useState } from "react";
import { Clicker } from "./Clicker";
import People from "./People";

export default function App({ clickersCount, children }) {

  const [hasClicker, setHasClicker] = useState(true);
  const [totalCount, setTotalCount] = useState(
    parseInt(localStorage.getItem("Total count") ?? 0)
  );

  useEffect(() => {
    localStorage.setItem("Total count", totalCount);
  }, [totalCount]);

  const toggleClicker = () => {
    setHasClicker(!hasClicker);
  };

  const increment = () => {
    setTotalCount(totalCount + 1);
  };

  const tempArray = [...Array(clickersCount)];

  useEffect(() => {
    console.log("ben useEffect");
  }, []);

  // Generate random color
  //useMemo
  const colors = useMemo(() => {
    const colors = [];

    for (let i = 0; i < clickersCount; i++) {
      console.log("Ben useMemo");
      colors.push(`hsl(${Math.random() * 360}deg, 100%, 70%)`);
    }

    return colors;
  }, [hasClicker]);

  return (
    <>
      {children}

      <div>Total count {totalCount}</div>

      <button onClick={toggleClicker}>
        {hasClicker ? "Hide Clicker" : "Show Clicker"}
      </button>
      {/* { hasClicker ? <Clicker /> : null}
      { hasClicker && <Clicker />} */}

      {hasClicker && (
        <>
          {tempArray.map((value, index) => {
            return (
              <Clicker
                key={index}
                increment={increment}
                keyName={`count${index}`}
                color={colors[index]}
              />
            );
          })}

          <People />
        </>
      )}
    </>
  );
}
