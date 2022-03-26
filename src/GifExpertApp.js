import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["General"]);
  return (
    <>
      <h2> GifExpertApp</h2>
      <AddCategory setCategories={setCategories}></AddCategory>
      <hr />
      <ul>
        {categories.map((category) => (
          <GifGrid key={category} category={category}></GifGrid>
        ))}
      </ul>
    </>
  );
};

export default GifExpertApp;
