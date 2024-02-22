import React from "react";

const WatchedCard = ({ movieData }) => {
  const { title, genre, rating, posterid } = movieData;

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 transition-transform transform hover:scale-105">
      <img
        src={posterid}
        alt={title}
        className="w-full h-auto max-h-50 object-contain"
      />
      <div className="px-3 py-2">
        <div className="font-bold text-sm mb-1">{title}</div>
        <p className="text-xs text-gray-600 mb-1">Rating: {rating}</p>
        <p className="text-xs text-gray-600">Genre: {genre}</p>
      </div>
    </div>
  );
};

export default WatchedCard;
