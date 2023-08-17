import { useContext, useEffect } from "react";
import { DictionaryContext } from "@/context/DictionaryContext";
import { searchWord } from "@/utils/api";
import Result from "./Result";

function Output() {
  const {
    result,
    setResult,
    searchedWord,
    setIsLoading,
    setError,
    setArchives,
    archivedWords,
    setArchivedWords,
  } = useContext(DictionaryContext);

  async function fetchResult() {
    try {
      setIsLoading(true);
      setError(false);
      const fetchedResult = await searchWord(searchedWord);
      setResult(fetchedResult);
      setArchivedWords((currWords) =>
        // Just making sure unique names are kept as archived names so that it would hep us to show repeated words only once
        Array.from(new Set([...currWords, fetchedResult[0].word]))
      );
      //   Just making sure that we append data to the existing archives
      setArchives((currArchives) =>
        archivedWords.includes(fetchedResult[0].word)
          ? currArchives
          : [...currArchives, fetchedResult]
      );
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!searchedWord) return;
    fetchResult();
  }, [searchedWord]);

  return <Result result={result} />;
}

export default Output;
