import Link from "next/link";
import Header from "@/components/Header";
import Output from "@/components/Output";
import SearchBar from "@/components/SearchBar";

function index() {
  return (
    <div className="py-6 px-4 md:px-24 lg:px-60flex justify-center items-center">
      <div>
        <Header />
        <SearchBar />
        <Output />
        <Link href="/archives">Your History</Link>
      </div>
    </div>
  );
}

export default index;
