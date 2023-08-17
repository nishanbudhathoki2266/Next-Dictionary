import { DictionaryContext } from "@/context/DictionaryContext";
import React, { useContext, useState } from "react";

function SearchBar() {
  // For making controlled input
  const [typedText, setTypedText] = useState("");

  const { searchedWord, setSearchedWord } = useContext(DictionaryContext);

  function handleSearch(e) {
    e.preventDefault();
    setSearchedWord(typedText);
    setTypedText("");
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={typedText}
        onChange={(e) => setTypedText(e.target.value)}
        placeholder="🔍 Apple"
        className="w-full lg:w-3/4 border-[1px] border-[##CED9E3] rounded-xl px-8 border-gray-300 bg-[##CED9E3] text-base outline-none text-black placeholder:text-black placeholder:font-[400] placeholder:text-[18px] text-[18px] py-2 leading-8"
      />
    </form>
  );
}

export default SearchBar;
