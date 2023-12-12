"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchInput = () => {
  const search = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string | null>(
    search ? search.get("q") : ""
  );
  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    if (typeof searchQuery !== "string") {
      return;
    }

    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`);
  };

  return (
    <form onSubmit={onSearch} className="flex justify-center flex-1 mx-3 border-[1px] border-zinc-800 bg-inherit rounded-md">
      <input
        value={searchQuery || ""}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="rounded-md px-5 py-1 sm:px-5 sm:py-3 flex-1 text-zinc-200 bg-inherit focus:outline focus:outline-blue-800  placeholder:text-zinc-400"
        placeholder="Search by token name, symbol or address"
      />
    </form>
  );
};

export default SearchInput;