import { SEO } from "../components";
import { TrendingMovie } from "../container";

const Home = () => {
  return (
    <>
    <SEO title="Movie DB"/>
      <section>
        <TrendingMovie />
      </section>
    </>
  );
};

export default Home;
