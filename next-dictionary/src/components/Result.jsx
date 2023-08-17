import { Fragment, useContext, useEffect, useState } from "react";
import Button from "./Button";
import { DictionaryContext } from "@/context/DictionaryContext";
import { searchWord } from "@/utils/api";

function Result() {
  const {
    result,
    setResult,
    isLoading,
    searchedWord,
    setIsLoading,
    error,
    setError,
  } = useContext(DictionaryContext);

  //   For toggling between speeches -> nound and verb
  const [speech, setSpeech] = useState("noun");

  //   Deriving state from a active speech state
  const meanings = result[0]?.meanings.filter(
    (meaning) => meaning.partOfSpeech === speech
  )[0].definitions;

  async function fetchResult() {
    try {
      setIsLoading(true);
      const fetchedResult = await searchWord(searchedWord);
      setResult(fetchedResult);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchResult();
  }, [searchedWord]);

  if (error)
    return (
      <div className="overflow-hidden shadow-md border-2 border-[##CED9E3] rounded-xl p-6 mt-4 border-gray-300 bg-[##CED9E3] min-h-auto w-full lg:w-3/4">
        <p className="text-red-900">Something went wrong ⚠ {error.message}</p>
      </div>
    );

  return (
    <div className="overflow-hidden shadow-md border-2 border-[##CED9E3] rounded-xl p-6 mt-4 border-gray-300 bg-[##CED9E3] min-h-auto w-full lg:w-3/4">
      {isLoading && !error ? (
        <p>Loading...</p>
      ) : (
        <Fragment>
          <div className="flex gap-2">
            <Button
              type={speech === "noun" ? "primary" : ""}
              onClick={() => setSpeech("noun")}
            >
              Noun
            </Button>
            <Button
              type={speech === "verb" ? "primary" : ""}
              onClick={() => setSpeech("verb")}
            >
              Verb
            </Button>
          </div>
          <div>
            {/* If we don't want all the result, we can just splice the array accordingly */}
            {meanings?.map((meaning, index) => (
              <span key={index}>
                <p>
                  {index + 1}. {meaning.definition}
                </p>
              </span>
            ))}
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default Result;
