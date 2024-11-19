import { useInputValue } from "../contexts/ValueContext";

export default function Title() {
  const { value } = useInputValue();

  return <h1>{value ? value : "Awesome title"}</h1>;
}
