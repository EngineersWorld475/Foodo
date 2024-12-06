import { Sidebar } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import {
  FaBookOpen,
  FaGraduationCap,
  FaUsers
} from 'react-icons/fa';
import {
  HiHeart,
} from 'react-icons/hi';

const SidebarCom = () => {
    const location = useLocation();
    const [tab, setTab] = useState('')

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        if (tabFromUrl) {
          setTab(tabFromUrl);
        }
      }, [location.search]);
      
  return (
    <Sidebar className="w-full md:w-48">
      {/* Sidebar content */}
      <div className="flex flex-col items-center justify-center py-2 space-y-0.3">
        {/* Image */}
        <img 
          src="https://preview.redd.it/created-random-people-using-chatgpt-midjourney-do-you-know-v0-q1aa450i5dqb1.png?width=1024&format=png&auto=webp&s=c4e9abc47d193474a2fa1a7e337d9d9340dce947" 
          width={50} 
          height={50} 
          className="rounded-full border-2 border-gray-400 p-1"
          alt="Profile"
        />
        
        {/* Name under the image */}
        <p className="text-center font-semibold text-gray-800">Justin Cole</p>
        <p className="text-center font-light text-gray-500 text-xs">Chef de partie</p>
      </div>

      <div className='mt-20 flex flex-col items-center'>
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Link to={'/?tab=recipes'}>
                <Sidebar.Item 
                active={tab === 'recipes'}
                as={'div'}
                >
                  <div className={`text-sm flex gap-3 items-center ${tab === 'recipes' ? 'text-tomato' : 'text-gray-500'}`}>
                  <FaBookOpen size={16}/>
                  Recipes
                  </div>
                </Sidebar.Item>
                </Link>
                <Link to={'/?tab=favourites'}>
                <Sidebar.Item 
                active={tab === 'favourites'}
                as={'div'}
                >
                  <div className={`text-sm flex gap-3 items-center ${tab === 'favourites' ? 'text-tomato' : 'text-gray-500'}`}>
                  <HiHeart size={16}/>
                  Favourites
                  </div>
                </Sidebar.Item>
                </Link>
                <Link to={'/?tab=courses'}>
                <Sidebar.Item 
                active={tab === 'courses'}
                >
                  <div className={`text-sm flex gap-3 items-center ${tab === 'courses' ? 'text-tomato' : 'text-gray-500'}`}>
                    <FaGraduationCap size={16} />
                    Courses

                  </div>
                </Sidebar.Item>
                </Link>
                <Link to='/?tab=community'>
                <Sidebar.Item 
                active={tab === 'community'}
                >
                  <div className={`text-sm flex gap-3 items-center ${tab === 'community' ? 'text-tomato' : 'text-gray-500'}`}>
                    <FaUsers size={16}/>
                    Community

                  </div>
                </Sidebar.Item>
                </Link>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
      </div>
    </Sidebar>
  )
}

export default SidebarCom
