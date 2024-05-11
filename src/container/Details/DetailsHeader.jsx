import "react-circular-progressbar/dist/styles.css";
import { LazyImg } from "../../components";
import ContentWrapper from "../../Hoc/SectionWrapper";
const DetailsHeader = ({ details, crew }) => {
  const formatYear = (yearStr) => {
    const date = new Date(yearStr);
    const year = date.getFullYear();
    return year;
  };

  const formatTime = (totalTime) => {
    const hours = Math.floor(totalTime / 60);
    const minutes = totalTime % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  const genres = details?.genres?.map((genre) => genre.name);


  return (
    <section className="relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <img
          src={`https://image.tmdb.org/t/p/original${details?.backdrop_path}`}
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>
      <ContentWrapper>
        <div className="flex flex-col lg:flex-row justify-center items-start gap-10 py-10 relative z-10">
        <div className="w-64 lg:w-48">
  <LazyImg
    src={`https://image.tmdb.org/t/p/w300${details?.poster_path}`}
    className="object-cover w-full h-auto rounded-lg"
  />
</div>

          <div className="w-full lg:w-2/3 text-white">
            <h1 className="text-4xl font-bold capitalize mb-4">
              {details?.title || details?.name}{" "}
              <span className="font-medium">
                ({formatYear(details?.release_date || details?.first_air_date)})
              </span>
            </h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-lg font-medium">
                Rating: {details.vote_average.toFixed(1)}
              </span>
            </div>
            <div className="flex flex-col gap-4 mb-6">
              <p className="text-lg">
                {details?.runtime ? (
                  <>
                    <span className="font-medium">
                      Runtime: {formatTime(details?.runtime)}
                    </span>||
                    <span>{genres.join(", ")}</span>
                  </>
                ) : (
                  <>
                    {details.number_of_seasons} Seasons (
                    {details?.number_of_episodes} Episodes)
                  </>
                )}
              </p>
              <p className="text-lg">{details.overview}</p>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default DetailsHeader;
