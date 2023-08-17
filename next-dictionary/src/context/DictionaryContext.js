import { createContext, useState } from "react";

const DictionaryContext = createContext();

function DictionaryProvider({ children }) {
  const [searchedWord, setSearchedWord] = useState("apple");

  return (
    <DictionaryContext.Provider value={{ searchedWord, setSearchedWord }}>
      {children}
    </DictionaryContext.Provider>
  );
}

export { DictionaryProvider, DictionaryContext };
