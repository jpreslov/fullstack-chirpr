import * as React from "react";
import { useState, useEffect } from "react";
import { IChirp } from "../utils/types";
import HomeChirpCard from "../components/HomeChirpCard";

const Home: React.FC<HomeProps> = () => {
  const [chirps, setChirps] = useState<IChirp[]>([]);

  useEffect(() => {
    (async () => {
      let res = await fetch("/api/chirps");
      let chirps = await res.json();
      setChirps(chirps);
    })();
  }, []);
  return (
    <main className="container">
      <section className="row my-2 justify-content-center">
        {chirps.map((chirp) => (
          <HomeChirpCard key={`chirp-card-home-${chirp.id}`} chirp={chirp} />
        ))}
      </section>
    </main>
  );
};

interface HomeProps {}

export default Home;
