import { Greet } from "./components/Greet";

export function App() {
  return (
    <>
      <Greet name="Ulas" messsageCount={5} isLoggedIn />
    </>
  );
}
