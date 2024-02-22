import React from "react";

const WatchedCard = ({ movieData }) => {
  const { title, genre, rating, posterid } = movieData;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 transition-transform transform hover:scale-105">
      <img src={posterid} alt={title} className="w-full h-auto" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-sm text-gray-600 mb-2">Rating: {rating}</p>
        <p className="text-sm text-gray-600">Genre: {genre}</p>
      </div>
    </div>
  );
};

export default WatchedCard;
