import React from "react";
import ModalImage from "react-modal-image";

const Image = ({ image }) => {
  console.log(image.urls);
  return (
    <ModalImage
      small={image.urls.small}
      large={image.urls.full}
      alt={"Instagram Handle : " + image.user.instagram_username}
    />
  );
};

export default Image;
