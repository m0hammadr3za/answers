import { useEffect, useRef, useState } from "react";
import { faker } from "@faker-js/faker";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";

function Windowing() {
  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100,
    })
  );

  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fakePeople = [...Array(10000).keys()].map((key) => ({
      id: key,
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      bio: faker.lorem.lines(Math.random() * 50),
    }));

    setPeople(fakePeople);
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <AutoSizer>
        {({ width, height }) => (
          <List
            width={width}
            height={height}
            rowHeight={cache.current.rowHeight}
            deferredMeasurementCache={cache.current}
            rowCount={people.length}
            rowRenderer={({ key, index, style, parent }) => {
              const person = people[index];
              return (
                <CellMeasurer
                  key={key}
                  cache={cache.current}
                  parent={parent}
                  columnIndex={0}
                  rowIndex={index}
                >
                  <li style={style}>
                    <h1>{person.name}</h1>
                    <p>{person.bio}</p>
                  </li>
                </CellMeasurer>
              );
            }}
          />
        )}
      </AutoSizer>
    </div>
  );
}

export default Windowing;
