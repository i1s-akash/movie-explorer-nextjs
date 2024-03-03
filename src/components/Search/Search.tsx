"use client";
import React, { useRef, useState } from "react";
import { TextField } from "@mui/material";

interface SearchProps {
  searchMovies: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchMovies }) => {
  const timer: any = useRef();
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <TextField
      label="Search for movies"
      variant="outlined"
      fullWidth
      value={searchInput}
      onChange={(e) => {
        setSearchInput(e.target.value);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
          searchMovies(e.target.value);
        }, 1000);
      }}
      size="small"
    />
  );
};

export default Search;
