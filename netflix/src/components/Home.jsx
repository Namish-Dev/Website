import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const apikey = "e840ce3dd964e6333120bdcaa42c0970";
const url = "https://api.themoviedb.org/3/movie";
const popular = "popular";
const nowplaying = "now_playing";
const toprated = "top_rated";
const upcoming = "upcoming";

const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

const Card = ({ img }) => {
  return <img className="card" src={img} alt="Movie Poster" />;
};

const Row = ({ title, arr = [] }) => {
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {arr.map((item, index) => (
          <Card key={index} img={`${imageBaseUrl}${item.poster_path}`} />
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowplayingMovies, setNowlayingMovies] = useState([]);
  const [topratedMovies, setTopratedMovies] = useState([]);
  const [UpcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [
          popularResponse,
          nowPlayingResponse,
          topRatedResponse,
          upcomingResponse,
        ] = await Promise.all([
          axios.get(`${url}/${popular}?api_key=${apikey}`),
          axios.get(`${url}/${nowplaying}?api_key=${apikey}`),
          axios.get(`${url}/${toprated}?api_key=${apikey}`),
          axios.get(`${url}/${upcoming}?api_key=${apikey}`),
        ]);

        setPopularMovies(popularResponse.data.results);
        setNowlayingMovies(nowPlayingResponse.data.results);
        setTopratedMovies(topRatedResponse.data.results);
        setUpcomingMovies(upcomingResponse.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <section className="home">
      <div className="banner">
        <Carousel
         infiniteLoop
         autoPlay
         interval={1000}
         showStatus={false}
        >
          {popularMovies.map((items, index) => (
            <div key={index} className="carousel-slide">
              <img src={`${imageBaseUrl}${items.poster_path}`} />
              <div className="carousel-title">{items.title}
              <div className="btn"><button>Learn more</button>
              <button>Watch now</button></div>
              </div>
            </div>
          ))}
        </Carousel>
        
      </div>
      <Row title="Popular on Netflix" arr={popularMovies} />
      <Row title="Top-rated" arr={topratedMovies} />
      <Row title="Upcoming" arr={UpcomingMovies} />
      <Row title="Now Playing" arr={nowplayingMovies} />
    </section>
  );
};

export default Home;
