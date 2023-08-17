import { createContext, useState } from "react";

const DictionaryContext = createContext();

function DictionaryProvider({ children }) {
  const [searchedWord, setSearchedWord] = useState("apple");
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <DictionaryContext.Provider
      value={{
        searchedWord,
        setSearchedWord,
        result,
        setResult,
        isLoading,
        setIsLoading,
        error,
        setError,
      }}
    >
      {children}
    </DictionaryContext.Provider>
  );
}

export { DictionaryProvider, DictionaryContext };
