import React, { useEffect, useState } from 'react';
import SidebarCom from '../components/SidebarCom';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchFoodDetails = async () => {
        try {
            setLoading(true);
            setError(null);
            const recipeId = Number(id);
            if (isNaN(recipeId)) {
                throw new Error('Invalid recipe ID');
            }

            const res = await fetch(`https://foodo-lmk8-gjmsbs1o0-sanjay-g-nairs-projects.vercel.app/api/recipes/${recipeId}`);
            if (!res.ok) {
                throw new Error(`Failed to fetch: ${res.statusText}`);
            }

            const data = await res.json();
            setDetails(data); 
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFoodDetails();
    }, [id]); 

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='min-h-screen flex flex-col md:flex-row bg-gray-100'>
            <div className='md:w-47'>
                <SidebarCom />
            </div>
            <div className="flex-1 p-4">
                <h1 className="text-3xl font-bold mb-4">Recipe Details</h1>
                {details ? (
                    <div>
                        <h2 className="text-2xl font-semibold">{details.name}</h2>
                        <p>Difficulty: {details.difficulty}</p>
                        <p>Category: {details.category}</p>
                        <p>Calories: {details.kcal}</p>
                        <p>Cooking Time: {details.min} minutes</p>
                        <img src={details.image} alt={details.name} className="w-full h-auto my-4 rounded-lg" />
                    </div>
                ) : (
                    <p>No details available for this recipe.</p>
                )}
            </div>
        </div>
    );
};

export default RecipeDetails;
