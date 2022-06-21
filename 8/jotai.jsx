import { useEffect } from "react";
import { atom, useAtom } from "jotai";

const messageAtom = atom("my atom!");
const readOnlyAtom = atom((get) => "this is" + get(message));
const writeOnlyAtom = atom(null, (get, set, update) => {
  set(messageAtom, update);
});

const Jotai = () => {
  const [message, setMessage] = useAtom(messageAtom);

  useEffect(() => {
    if (message === "") {
      setMessage("a simple atom!");
    }
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default Jotai;
