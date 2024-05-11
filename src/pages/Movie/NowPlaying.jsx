import { useState, useEffect } from "react";
import { Error, MovieCard, SEO } from "../../components";
import ContentWrapper from "../../Hoc/SectionWrapper";
import {
  useGetGenresDataQuery,
  useGetNowPlaingMovieQuery,
} from "../../redux/TMDB";
import Select from "react-select";
import MovieSkeleton from "../../components/skeletons/MovieSkeleton";
import ReactPaginate from "react-paginate";

const NowPlaying = () => {
  const [pageNum, setPageNum] = useState(1);
  const [allMovies, setAllMovies] = useState([]);
  const [genre, setGenre] = useState(null);
  const media_type = "movie";
  const {
    data: movies,
    isFetching,
    error,
  } = useGetNowPlaingMovieQuery(pageNum);
  const { data: genresData } = useGetGenresDataQuery(media_type);

  console.log(genresData)

  useEffect(() => {
    if (movies?.results) {
      setAllMovies(movies.results);
    }
  }, [movies]);

  useEffect(() => {
    if (!genre || genre.length === 0) {
      setPageNum(1);
    }
  }, [genre]);

  const handlePageChange = ({ selected }) => {
    window.scrollTo(0, 0);
    setPageNum(selected + 1);
  };

  if (error) return <Error />;

  return (
    <>
      <SEO title="Now Playing Movies - The Movie DB" />
      <div className="w-full h-full py-10">
        <ContentWrapper>
          {!isFetching ? (
            <div className="w-full h-full flex flex-wrap items-start justify-center gap-5">
              {allMovies?.map((media, index) => (
                <section key={`${media.id}-${index}`}>
                  <MovieCard Media={media} />
                </section>
              ))}
            </div>
          ) : (
            <div className="w-full h-full flex flex-wrap justify-center overflow-x-hidden px-5 gap-5">
              <MovieSkeleton />
              <MovieSkeleton />
              <MovieSkeleton />
              <MovieSkeleton />
              <MovieSkeleton />
              <MovieSkeleton />
              <MovieSkeleton />
              <MovieSkeleton />
              <MovieSkeleton />
              <MovieSkeleton />
              <MovieSkeleton />
              <MovieSkeleton />
              <MovieSkeleton />
              <MovieSkeleton />
              <MovieSkeleton />
            </div>
          )}
        </ContentWrapper>
      </div>
    </>
  );
};

export default NowPlaying;
