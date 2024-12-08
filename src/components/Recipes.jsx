import React from 'react';
import FoodCard from './FoodCard';
import useFetchFoodItems from '../hooks/useFetchFoodItems';

const Recipes = () => {
  const { data: foodItems, loading, error } = useFetchFoodItems('/db.json');
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>; 
  }

  return (
    <div className="min-h-screen w-full py-10 px-5 bg-gray-100">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center p-5">
        {/* Recipes logo and text */}
        <div className="flex items-center space-x-4 mb-5 md:mb-0">
          <img
            src="https://img.freepik.com/premium-vector/logo-food-company-that-says-sun-sun-sunflower_917213-253424.jpg?semt=ais_hybrid"
            alt="logo"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-gray-300"
          />
          <div>
            <h1 className="text-base md:text-3xl text-gray-800 title-tag">Only the Best Recipes!</h1>
            <p className="text-xs md:text-sm text-gray-500">Today's new recipes for you</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 bg-gray-200 py-4 px-4 rounded-md">

          <div className="text-center">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">168</h1>
            <p className="text-xs md:text-sm text-gray-500">Tutorials</p>
          </div>

          <div className="h-0.5 md:h-10 w-full md:w-1 bg-gray-400"></div>

          <div className="text-center">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">304</h1>
            <p className="text-xs md:text-sm text-gray-500">Recipes</p>
          </div>
        </div>
      </div>

      {/* setting grid for each food item */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
        {foodItems.recipes.map((item) => (
          <FoodCard key={item.id} food={item} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
