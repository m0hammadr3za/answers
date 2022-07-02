import { useEffect, useMemo, useState } from "react";

function SecondaryUseMemo() {
  const [count, setCount] = useState(0);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => setComments(json));
  }, []);

  const findLongestWord = useMemo(() => {
    if (comments.length === 0) return;

    let longestWord = "";

    for (let comment of comments) {
      const words = comment.body.split(" ");

      for (let word of words) {
        if (word.length > longestWord.length) {
          longestWord = word;
        }
      }

      /// delay
      for (let i = 0; i < 10000000; i++) {}
    }

    console.log("findLongestWord function ran!");
    return longestWord;
  }, [comments]);

  return (
    <div>
      <p>{findLongestWord}</p>
      <button onClick={() => setCount(count + 1)}>Click here</button>
    </div>
  );
}

export default SecondaryUseMemo;
