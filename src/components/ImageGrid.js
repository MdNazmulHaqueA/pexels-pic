import React, { useState } from "react";

const ImageGrid = ({ images }) => {
  const [noOfElements, setNoOfElement] = useState(20);
  const slice = images.slice(0, noOfElements);
  const loadMore = () => {
    setNoOfElement(noOfElements + noOfElements);
  };
  return (
    <div className="container-fluid my-5 text-light">
      <div className="text-center pb-5">
        <h1>Matched images</h1>
      </div>
      <div className="image-grid row rounded p-4 pt-0 g-4 justify-content-center align-items-center">
        {slice.map((image) => (
          <a
            rel="noreferrer"
            target="_blank"
            href={image.src.large2x}
            key={image.id}
            className="col-sm-6 col-md-4 col-lg-3"
          >
            <img src={image.src.medium} alt="" className="img-fluid" />
          </a>
        ))}
      </div>

      <div className="d-flex justify-content-center ">
        {images.length === slice.length ? (
          ""
        ) : (
          <button
            disabled={images.length === slice.length}
            className="search-btn my-3"
            onClick={loadMore}
          >
            Show More
          </button>
        )}
      </div>

      <p className="text-end">
        Showing {`${slice.length} of ${images.length}`}
      </p>
    </div>
  );
};

export default ImageGrid;
