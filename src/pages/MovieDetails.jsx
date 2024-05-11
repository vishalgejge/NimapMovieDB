import { Error, SEO } from "../components";
import { Details } from "../components/skeletons";
import {
  Cast,
  DetailsHeader,
} from "../container";

import {
  useGetMovieCraditsQuery,
  useGetMovieDetailsQuery,
  useGetWatchMovieQuery,
} from "../redux/TMDB";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movie_id } = useParams();
  const {
    data: details,
    isFetching,
    error,
  } = useGetMovieDetailsQuery(movie_id);
  const { data: platforms } = useGetWatchMovieQuery(movie_id);
  const { data: credits, isFetching: castLoading } =
    useGetMovieCraditsQuery(movie_id);

  if (error) return <Error />;

  if (isFetching) return <Details />;

  return (
    <>
      <SEO
        title={`${details?.title || details?.name} - The Movie DB`}
      />
      {details && (
        <div className="w-full h-full mt-10 mb-20">
          <DetailsHeader
            details={details}
            platforms={platforms?.results?.IN}
            crew={credits?.crew}
          />
          {credits?.cast && credits?.cast.length > 0 && (
            <section className="py-10 flex flex-row gap-5">
              <Cast casts={credits?.cast} loading={castLoading} />
            </section>
          )}
        </div>
      )}
    </>
  );
};

export default MovieDetails;
