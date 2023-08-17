import Link from "next/link";
import Header from "@/components/Header";
import Output from "@/components/Output";
import SearchBar from "@/components/SearchBar";

function index() {
  return (
    <div className="py-6 px-4 md:px-24 lg:px-60">
      <div className="flex flex-col">
        <Header />
        <SearchBar />
        <Output />
        <Link
          href="/archives"
          className="text-white bg-[#3EBCF7] border-0 py-12 px-16 text-center font-[900] mt-24 -skew-y-6 text-[50px] hover:scale-105 transition-all block mx-auto w-full lg:w-4/6 focus:outline-none rounded-3xl text-lg"
        >
          All Your Archives
        </Link>
      </div>
    </div>
  );
}

export default index;
