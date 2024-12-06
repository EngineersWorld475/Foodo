import React from 'react';
import { Link } from 'react-router-dom';

const FoodCard = ({ food }) => {
  
  return (
    <div className="relative bg-white mt-20 shadow-lg rounded-lg py-4 px-7 w-64 mx-auto">
      {/* image at the top */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
        <img
          src={food?.image}
          alt="Food"    
          className="w-24 h-24 rounded-full border-4 border-white shadow-md"
        />
      </div>

      {/* Card Content */}
      <div className="mt-16 text-center">
        
        <h2 className="text-lg font-bold text-gray-800">{food?.name || 'No Name Available'}</h2>

        
        <p className="text-sm text-gray-500 mt-1">{food?.difficulty || 'Unknown'}</p>

        
        <div className="flex flex-row justify-between foods-center mt-4">
         
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800">{food?.min || 'N/A'}</h3>
            <p className="text-xs text-gray-500">Min</p>
          </div>

          
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800">{food?.kcal || 'N/A'}</h3>
            <p className="text-xs text-gray-500">Kcal</p>
          </div>

          
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800">{food?.category || 'Unknown'}</h3>
            <p className="text-xs text-gray-500">Category</p>
          </div>
        </div>

        {/* Rating Stars */}
        <div className="flex justify-center foods-center mt-2">
          <img
            src={food?.rating} 
            alt="review_stars"
            height={50}
            width={100}
          />
        </div>

        {/* Button */}
        <Link to={`/food-item/${food?.id}`}>
        <div className="mt-2">
          <button className="bg-tomato hover:bg-green-400 text-white font-semibold py-2 w-full rounded-md transition-colors duration-1000">
            Start Cooking
          </button>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
