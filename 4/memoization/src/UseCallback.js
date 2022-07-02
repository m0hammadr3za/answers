import { memo, useCallback, useRef, useState } from "react";

function UseCallback() {
  const [text, setText] = useState("");

  // const clearText = useCallback(() => setText(""), []);

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <Count clearText={() => setText("")} />
    </div>
  );
}

const Count = memo(({ clearText }) => {
  const [count, setCount] = useState(0);
  const renders = useRef(0);

  const handleClick = () => {
    setCount(count + 1);
    if (count >= 10) clearText();
  };

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <p>Renders: {renders.current++}</p>
      </div>

      <button onClick={handleClick}>Increment</button>
    </>
  );
});

export default UseCallback;
