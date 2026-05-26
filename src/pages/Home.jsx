import React from "react";
import { useEffect, useState, useContext } from "react";
import Banner from "../components/ui/banner";
import Footer from "../components/layout/Footer/footer";
import RowPost from "../components/ui/rowPost";
import {
  originals,
  trending,
  comedy,
  horror,
  Adventure,
  SciFi,
  Animated,
  War,
  trendingSeries,
  UpcomingMovies,
} from "../constants/urls";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { AuthContext } from "../context/userContext";

function Home() {
  const { User } = useContext(AuthContext);
  const [watchedMovies, setWatchedMovies] = useState([]);

  useEffect(() => {
    if (!User?.uid) return;
    getDoc(doc(db, "WatchedMovies", User.uid)).then((result) => {
      if (result.exists()) {
        const mv = result.data();
        setWatchedMovies(mv.movies);
      }
    });
  }, [User]);

  return (
    <div>
      <Banner url={trending}></Banner>
      <div className="w-[99%] ml-1">
        <RowPost first title="Trending" url={trending} key={trending}></RowPost>
        <RowPost title="Animated" url={Animated} key={Animated}></RowPost>
        {watchedMovies.length != 0 ? (
          <RowPost
            title="Watched Movies"
            movieData={watchedMovies}
            key={"Watched Movies"}
          ></RowPost>
        ) : null}
        <RowPost
          title="Netflix Originals"
          islarge
          url={originals}
          key={originals}
        ></RowPost>
        <RowPost
          title="Trending Series"
          url={trendingSeries}
          key={trendingSeries}
        ></RowPost>
        <RowPost title="Science Fiction" url={SciFi}></RowPost>
        <RowPost title="Upcoming Movies" url={UpcomingMovies}></RowPost>
        <RowPost title="Comedy" url={comedy}></RowPost>
        <RowPost title="Adventure" url={Adventure}></RowPost>
        <RowPost title="Horror" url={horror}></RowPost>
        <RowPost title="War" url={War}></RowPost>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
