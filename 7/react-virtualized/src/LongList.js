import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

function LongList() {
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
    <>
      {people.map((person) => (
        <li key={person.id}>
          <h1>{person.name}</h1>
          <p>{person.bio}</p>
        </li>
      ))}
    </>
  );
}

export default LongList;
