import { ValueProvider } from "./contexts/ValueContext";
import Title from "./components/Title";
import Input from "./components/Input";
import "./App.css";

function App() {
  return (
    <ValueProvider>
      <Title />
      <Input />
    </ValueProvider>
  );
}

export default App;
