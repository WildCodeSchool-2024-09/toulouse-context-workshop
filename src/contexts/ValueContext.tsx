import { createContext, useState, useContext, ReactNode, useMemo } from "react";

interface ChildrenProp {
  children: ReactNode;
}

interface ValueContextProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const ValueContext = createContext<ValueContextProps | null>(null);

export function ValueProvider({ children }: ChildrenProp) {
  const [value, setValue] = useState<string>("");

  const memoValue = useMemo(() => {
    return {
      value,
      setValue,
    };
  }, [value]);
  return (
    <ValueContext.Provider value={memoValue}>{children}</ValueContext.Provider>
  );
}

export function useInputValue() {
  const value = useContext(ValueContext);

  if (value == null) {
    throw new Error("This component is outside of the provider's boundaries");
  }

  return value;
}
