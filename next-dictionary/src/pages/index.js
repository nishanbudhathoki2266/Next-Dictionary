import Header from "@/components/Header";
import Result from "@/components/Result";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";

function index() {
  return (
    <div className="py-6 px-4 md:px-24 lg:px-60">
      <Header />
      <SearchBar />
      <Result />
    </div>
  );
}

export default index;
