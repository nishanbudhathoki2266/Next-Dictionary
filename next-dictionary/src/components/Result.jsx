import { Fragment, useContext, useEffect, useRef, useState } from "react";
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
  )[0]?.definitions;

  //   For playing music with audio
  const audioRef = useRef();

  //   For Audio playing state -> to display icons of pause and play accordingly
  const [isPlaying, setIsPlaying] = useState(false);

  async function handleAudioPlay() {
    setIsPlaying(true);
    audioRef.current.play();
  }

  function handleAudioPause() {
    setIsPlaying(false);
    audioRef.current.pause();
  }

  async function fetchResult() {
    try {
      setIsLoading(true);
      setError(false);
      const fetchedResult = await searchWord(searchedWord);
      setResult(fetchedResult);
    } catch (err) {
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
        <p className="text-red-900 text-[20px] leading-[20px]">
          Something went wrong ⚠ {error.message}
        </p>
      </div>
    );

  return (
    <div className="overflow-hidden shadow-md border-2 border-[##CED9E3] rounded-xl p-6 mt-4 border-gray-300 bg-[##CED9E3] min-h-auto w-full lg:w-3/4">
      {isLoading && !error ? (
        <p className="text-[20px] leading-[30px] font-[400]">Loading...</p>
      ) : (
        <Fragment>
          <div className="flex gap-4 mb-5 items-center">
            {/* Plays in loop so we can pause or play it */}
            <audio src={result[0]?.phonetics[0]?.audio} ref={audioRef} loop />
            <div
              className="h-16 w-16 rounded-full bg-black relative cursor-pointer flex justify-center items-center"
              onClick={() => {
                isPlaying ? handleAudioPause() : handleAudioPlay();
              }}
            >
              {/* I am using just some text as icons as there was a criteria of not installing any external packages */}
              <h1
                className={`absolute z-50 text-white text-center text-3xl ${
                  isPlaying ? "text-[17px]" : ""
                }`}
              >
                {isPlaying ? "| |" : "▷"}
              </h1>
            </div>
            <span>{result[0]?.phonetic}</span>
          </div>
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
                <p className="text-[20px] leading-[30px] font-[400]">
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
