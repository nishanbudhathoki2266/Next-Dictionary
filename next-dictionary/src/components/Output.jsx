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
      // As the api values are not same for all words we are checking the length to assign values accordingly
      setResult(fetchedResult);
      setArchivedWords((currWords) =>
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
