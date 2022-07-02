import { memo, useRef, useState } from "react";

function ReactMemo() {
  const [text, setText] = useState("");

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <Count />
    </div>
  );
}

const Count = () => {
  const [count, setCount] = useState(0);
  const renders = useRef(0);

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <p>Renders: {renders.current++}</p>
      </div>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

// const Count = memo(() => {
//   const [count, setCount] = useState(0);
//   const renders = useRef(0);

//   return (
//     <>
//       <div>
//         <p>Count: {count}</p>
//         <p>Renders: {renders.current++}</p>
//       </div>

//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </>
//   );
// });

export default ReactMemo;
