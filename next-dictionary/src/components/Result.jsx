import { useEffect, useState } from "react";
import Button from "./Button";
import { searchWord } from "@/utils/api";

function Result() {
  return (
    <div className="overflow-hidden shadow-md border-2 border-[##CED9E3] rounded-xl p-6 mt-4 border-gray-300 bg-[##CED9E3] min-h-auto w-full lg:w-3/4">
      <div className="flex gap-2">
        <Button type="primary">Noun</Button>
        <Button>Verb</Button>
      </div>
      <div>I am a result!</div>
    </div>
  );
}

export default Result;
