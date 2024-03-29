import React, { useState, useEffect } from "react";
import right from "../Assests/file9.jpg";
import axios from "axios";

function Horizontaldiv() {
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=7372ae765660f35a9b2e71883bb705a5&language=en-US&page=1`;
  const [overview, setOverview] = useState([]);

  const apiii = async () => {
    try {
      const response = await axios.get(url);
      setOverview(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };
  const trailerPlayer = async (x) => {
    console.log(x);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${x}/videos?api_key=7372ae765660f35a9b2e71883bb705a5&language=en-US`
      );
      var url = `https://www.youtube.com/embed/${response.data.results[0].key}`;
      console.log(url);
      window.open(url, "_blank");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    apiii();
  });

  return (
    <>
      <h1
        style={{
          marginTop: "20px",
          marginLeft: "60px",
          color: "white",
        }}
        id="upcoming"
      >
        {" "}
        Upcoming Movies{" "}
      </h1>{" "}
      <div
        className="scrolling-wrapper"
        id="ex3"
        style={{
          width: "90%",
          height: "400px",
          marginBottom: "5%",
          marginTop: "5%",
          marginLeft: "5%",
          marginRight: "4%",
          backgroundImage: `url(${right})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "130% 180%",
        }}
      >
        <div>
          {" "}
          {overview.map((x, index) => {
            return (
              <div
                key={index}
                className="horizontalcomponent"
                style={{
                  zIndex: "9",
                  marginTop: "6%",
                }}
              >
                <input
                  type="Image"
                  src={`https://www.themoviedb.org/t/p/original${x.backdrop_path}`}
                  style={{
                    width: "355px",
                    height: "200px",
                    borderRadius: "25px",
                  }}
                  onClick={() => trailerPlayer(x.id)}
                  className="imagebutton"
                ></input>{" "}
                <h2
                  style={{
                    color: "white",
                    textAlign: "center",
                    marginLeft: "8%",
                    fontSize: "30px",
                    fontFamily: "Lato, sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  {x.title.slice(0, 25)}{" "}
                </h2>{" "}
              </div>
            );
          })}{" "}
        </div>{" "}
      </div>{" "}
      {/* <Modal show={isOpen} onHide={hideModal} size="xl">         
                  <iframe width="700px" height="700px" src={`https://www.youtube.com/embed/${query}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </Modal> */}{" "}
    </>
  );
}

export default Horizontaldiv;
