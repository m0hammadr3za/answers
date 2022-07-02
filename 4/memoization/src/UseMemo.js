import { memo, useMemo, useRef, useState } from "react";

function UseMemo() {
  const [text, setText] = useState("");

  const data = useMemo(() => {
    return { maxCount: 5 };
  }, []);

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <Count data={data} />
    </div>
  );
}

const Count = memo(({ data }) => {
  const [count, setCount] = useState(0);
  const renders = useRef(0);

  const handleClick = () => {
    if (count >= data.maxCount) setCount(0);
    else setCount(count + 1);
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

export default UseMemo;
