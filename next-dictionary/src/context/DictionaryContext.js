import { createContext, useState } from "react";

const DictionaryContext = createContext();

function DictionaryProvider({ children }) {
  const [searchedWord, setSearchedWord] = useState("");
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Archives state for storing all searched history
  const [archives, setArchives] = useState([]);

  // Just a state to keep track of words added in the archive -> To prevent duplicate words to be shown in the history
  const [archivedWords, setArchivedWords] = useState([]);

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
        archives,
        setArchives,
        archivedWords,
        setArchivedWords,
      }}
    >
      {children}
    </DictionaryContext.Provider>
  );
}

export { DictionaryProvider, DictionaryContext };
