import React from "react";
import Gallery from "./components/Gallery";
import SearchBox from "./components/SearchBox";

const App = () => {
  const [input, setInput] = React.useState("");
  return (
    <center>
      <h1>Image-Discovery</h1>
      <SearchBox input={input} setInput={setInput} />
      <Gallery query={input} />
    </center>
  );
};

export default App;
