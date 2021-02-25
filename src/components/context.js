import React, { createContext, useReducer, useContext } from 'react';

export const TypingContext = createContext([{}, ()]);

export const TypingProvider =({ children}) => {
  const value = useReducer(() => ({}), {});
  return (
    <TypingContext.Provider value={value}>{children}</TypingContext.Provider>
  );
};

export const useTyping = () => {
  const [state,dispatch] = useContext(typingContext);

  return [state, dispatch];
}