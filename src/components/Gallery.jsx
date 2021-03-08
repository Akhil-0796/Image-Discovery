import React, { useEffect, useState } from "react";
import { getSearchedImages, getTrendingImages } from "../api/api";
import Image from "./Image";
import Masonry from "react-masonry-component";

const Gallery = ({ query }) => {
  const [imgList, setImgList] = useState([]);

  useEffect(() => {
    getTrendingImages().then((data) => {
      console.log(data);
      setImgList(data);
    });
  }, []);

  useEffect(async () => {
    if (query.trim() == "") {
      return;
    }
    const data = await getSearchedImages(query);
    setImgList(data);
  }, [query]);

  return (
    <div>
      <Masonry className="grid-container" options={{ isFitWidth: true }}>
        {imgList.map((item) => {
          return (
            <div>
              <Image image={item} />
              <p>By : {item.user.name}</p>
              <p>Likes : {item.likes}</p>
            </div>
          );
        })}
      </Masonry>
    </div>
  );
};

export default Gallery;
