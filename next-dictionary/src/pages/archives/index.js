import Result from "@/components/Result";
import { DictionaryContext } from "@/context/DictionaryContext";
import Link from "next/link";
import React, { Fragment, useContext } from "react";

function Archives() {
  const { archives } = useContext(DictionaryContext);

  return (
    <div className="py-6 px-4 md:px-24 lg:px-60flex justify-center items-center">
      <div className="flex justify-between">
        <Link href="/" className="font-bolder text-blue-800 text-xl">
          &larr; Back to Dictionary
        </Link>
        <h1 className="font-bold text-4xl uppercase text-center">
          All your archives
        </h1>
      </div>

      {archives.length < 1 ? (
        <p className="text-center mt-8 text-xl">
          There are no any word archives...
        </p>
      ) : (
        archives.map((archive, index) => (
          <Fragment>
            <p className="font-[500] text-[30px] leading-[30px] my-8">
              Word: {archive[0].word.toUpperCase()}
            </p>
            <Result key={index} result={archive} />
          </Fragment>
        ))
      )}
    </div>
  );
}

export default Archives;
