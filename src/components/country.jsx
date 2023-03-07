import React from 'react'
import { Link } from 'react-router-dom'
import {BsSun,BsMoonFill} from "react-icons/bs"
import { useState } from 'react'
import Search from './search'


export default function Country() {
    const [darkMode,setDarkMode]=useState(false)


    // Setting to sun and dark Mode
    const themeColor =()=>{
        var themeToggleDarkIcon=document.getElementById('theme-toggle-dark-icon')
        var themeToggleLightIcon=document.getElementById('theme-toggle-light-icon')

        if(localStorage.getItem('color-theme')==='dark'||('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches){
            themeToggleLightIcon.classList.remove('hidden')
        }
        else{
            themeToggleDarkIcon.classList.remove('hidden')
        }

        var themeToggle = document.getElementById('theme-toggle')
        themeToggle.addEventListener('click',()=>{
            themeToggleDarkIcon.classList.toggle('hidden');
            themeToggleLightIcon.classList.toggle('hidden');
            if (localStorage.getItem('color-theme')) {
                if (localStorage.getItem('color-theme') === 'light') {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                }
            } else {
                if (document.documentElement.classList.contains('dark')) {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                } else {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                }
            }
        })

    }

  return (
    
    <>
    <div className=''>
     <nav class="bg-white dark:bg-slate-700 shadow-md p-4 mt-0 fixed w-full  z-10 top-0">
        <div class="container mx-auto flex flex-wrap items-center">
		    <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
				<Link class="text-black dark:text-white no-underline hover:text-white hover:no-underline" to="">
					<span class="text-1xl pl-1 ml-8 flex">Where in the World?</span>
				</Link> 
            </div>
			<div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
            <button
             id="theme-toggle" 
             type="button"
              class="text-black flex dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
              onClick = {()=>setDarkMode(themeColor)}
              >
            <BsMoonFill id="theme-toggle-dark-icon" className='mt-1 mx-1 hidden'/>
            <BsSun id="theme-toggle-light-icon" className='mt-1 mx-1 hidden' />
            DarkMode
            </button>
            
			</div>
        </div>
    </nav>

    <Search>
        
    </Search>
    </div>
    </>
  )
}
