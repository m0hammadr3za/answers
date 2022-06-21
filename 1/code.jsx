import { useEffect, useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // just put the condition inside the useEffect
    if (count < 0) {
      setCount(Date.now());
    }
  }, []);

  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle("New title!");
  }, []);

  return (
    <div>
      <p>Order matters with hooks!</p>
    </div>
  );
};

export default Example;
