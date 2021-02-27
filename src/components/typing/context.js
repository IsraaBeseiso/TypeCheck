import React, {
  createContext,
  useReducer,
  useContext,
} from "./node_modules/react";

export const TypingContext = createContext([{}]);

export const TypingProvider = ({ children }) => {
  const value = useReducer(() => ({}), {});
  return (
    <TypingContext.Provider value={value}>{children}</TypingContext.Provider>
  );
};

export const useTyping = () => {
  const [state, dispatch] = useContext(TypingContext);

  return [state, dispatch];
};
