import React, { useEffect, useState } from 'react'
import SidebarCom from '../components/SidebarCom'
import { useLocation, useNavigate } from 'react-router-dom'
import Favourites from '../components/Favourites';
import Courses from '../components/Courses';
import Community from '../components/Community';
import Recipes from '../components/Recipes';

const HomePage = () => {
    const location = useLocation();
    const [tab, setTab] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
      const urlParams = new URLSearchParams(location.search);
      const tabFromUrl = urlParams.get("tab");
  
      if (tabFromUrl) {
        setTab(tabFromUrl);
      } else {
        setTab("recipes");
        navigate("/?tab=recipes", { replace: true });
      }
    }, [location.search, navigate]);
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
        <div className='md:w-47'>
            <SidebarCom />
        </div>
      {tab === 'recipes' && <Recipes />}
      {tab === 'favourites' && <Favourites />}
      {tab === 'courses' && <Courses />}
      {tab === 'community' && <Community />}
    </div>
  )
}

export default HomePage
