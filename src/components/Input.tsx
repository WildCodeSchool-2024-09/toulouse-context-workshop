import { useInputValue } from "../contexts/ValueContext";

export default function Input() {
  const { value, setValue } = useInputValue();

  return (
    <input
      type="text"
      placeholder="Enter text to change title"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}
