import { createElement } from "react";

function ElementMadeByCreateElement() {
  const element = createElement(
    "h1",
    { className: "greeting" },
    createElement(
      "span",
      { className: "text" },
      "An element created using 'createElement'!"
    )
  );

  // const element = {
  //   type: "h1",
  //   props: {
  //     className: "greeting",
  //     children: {
  //       type: "span",
  //       props: {
  //         className: "text",
  //         children: "An element created using 'createElement'!",
  //       },
  //     },
  //   },
  // };

  return element;
}

export default ElementMadeByCreateElement;
