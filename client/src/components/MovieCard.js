const MovieCard = ({ moviesData }) => {
  const { Title, Year, Poster } = moviesData;

  return (
    <div className="m-4 p-2">
      <div className="imdb-card shadow-md rounded-md overflow-hidden bg-white transition-transform duration-300 transform hover:scale-105 hover:bg-pink-300 items-center">
        {Poster ? (
          <img
            className="movie-logo h-45 w-46"
            src={Poster}
            alt={Title || "Movie Poster"}
          />
        ) : (
          <div className="placeholder-image h-45 w-46 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
        <h1 className="text-lg font-semibold mb-2">{Title}</h1>
        <h2 className="text-sm text-gray-600">{Year}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
