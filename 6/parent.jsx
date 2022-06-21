import { useState } from "react";
import FirstChild from "./first-child";
import SecondChild from "./second-child";

const Parrent = () => {
  const [data, setdata] = useState({ title: "Common data!" });

  return (
    <div>
      <FirstChild data={data} />

      <SecondChild data={data} />
    </div>
  );
};

export default Parrent;
