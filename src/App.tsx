import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Status } from "./components/Status";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

export function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <>
      <Greet name="Ulas" messsageCount={5} isLoggedIn />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Greet name="Ulas" isLoggedIn />
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event.screenX, id);
        }}
      />
      <Input
        value=""
        handleChange={(event) => console.log(event.target.value)}
      />
    </>
  );
}
