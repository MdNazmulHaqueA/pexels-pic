import React, { useState } from "react";
import ImageGrid from "./ImageGrid";
import Spinner from "./Spinner";

const Search = () => {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalResults, setTotalResults] = useState(null);

  async function requestFetch() {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${search}&orientation=landscape&per_page=300`,
        {
          method: "GET",
          headers: {
            Authorization: process.env.REACT_APP_PEXELS_API_KEY
          }
        }
      );
      const data = await response.json();
      setLoading(false);
      setImages(data.photos);
      setTotalResults(data.total_results);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    requestFetch();
    setSearch("");
  };

  return (
    <>
      {loading && <Spinner />}

      {!loading && !error && (
        <>
          <div className="header">
            <div className="search"></div>
            <div className="header-wrapper">
              <div className="container heading-wrapper">
                <div className="text-center text-light search-content">
                  <h1>Pexels-Pic</h1>
                  <p className="mt-3">
                    Your trusted source for searching images!
                  </p>
                </div>

                <form className="search-wrapper" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Search for pictures..."
                    className="search-input"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    required
                  />

                  <button className="search-btn" type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          {totalResults === 0 && (
            <h1 className="mt-5 text-center text-danger">No image found 😪</h1>
          )}
          {error && (
            <h1 className="mt-5 text-center text-danger">
              Fail to fetch images 😪
            </h1>
          )}
          {images.length === 0 && (
            <div className="container my-5 text-center footer">
              <h1>Hello, I’m Md Nazmul Haque. Nice to meet you.</h1>
              <p>
                Nazmul is passionate about turning an idea into a digital
                product through design and coding. He believes that creating
                innovative and impactful design solutions in collaboration with
                technology can create a better online presence with a better
                user experience that connects more users. He is excited to
                tackle web development challenges to achieve long-lasting
                impacts on user experience and grow his skills – currently
                working at Fiverr as a freelancer. He has 200+ satisfied clients
                so far.
                <br />
                <br />
                In the past few years, he has found himself learning programming
                languages and front-end development. He listens to songs, plays
                online games, and enjoys morning nature and twilight. People see
                him as a listener, honest, helpful, amiable, and reliable.
                <br />
                <br />
                - Based in Brahmanbaria, Bangladesh.
                <br />
                <br />
                For more details please have a look to my portfolio here {"> "}
                <span>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://nazmulhaqdesign.com"
                    className="text-decoration-none text-primary"
                  >
                    Md Nazmul Haque
                  </a>
                </span>
              </p>
            </div>
          )}

          {images.length !== 0 && <ImageGrid images={images} />}
        </>
      )}
    </>
  );
};

export default Search;
