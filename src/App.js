import "./App.css";
import { useState } from "react";
import axios from "axios";
import Display from "./Display";

const App = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = () => {
    axios
      .get("https://mashape-community-urban-dictionary.p.rapidapi.com/define", {
        params: { term: search },
        headers: {
          "X-RapidAPI-Key":
            "e426368d4emsh91900c45f639e28p1cc9a1jsna124da19cb9f",
          "X-RapidAPI-Host":
            "mashape-community-urban-dictionary.p.rapidapi.com",
        },
      })
      .then((response) => {
        setData(response.data.list);
        console.log(data);
      });
  };
  return (
    <div className="App">
      <p>Enter the word you'd like to search</p>
      <input
        className="word"
        type="text"
        name="WORD"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button className="Search" onClick={handleSearch}>
        Search
      </button>
      <div className="flex items-center flex-col justify-center">
        <Display data={data} />
      </div>
    </div>
  );
};

export default App;
