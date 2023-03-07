import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"

export default function Search() {
  const [Countries,setCountries]=useState([])

  useEffect(()=>{
      axios.get('https://restcountries.com/v3.1/all')
      .then(Response=>{
        setCountries(Response.data)
      })

  },[])
  return (
    <>
    <div className='w-[400px] mt-32'>
    <input type="text"
        id="voice-search" 
        class="bg-white shadow-md border border-white mx-3 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-slate-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search for a Country..."/>
   </div>
       <div className=' grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-4 dark:bg-black dark:text-white mt-12'>
        {
          Countries.map((country)=>{
            
          const {name,population,region,capital,flags}=country

          return <article className=''>
            <div className='p-12 max-w-sm'>
              <img src={flags.svg} alt={name.common} className="w-full h-[150px] "></img>

              <div className='dark:bg-slate-800 sm:p-5 sm:mt-[-20px]'>
              <h2>{name.common}</h2>
              <h3>Population:{population}</h3>
              <h3>Region:{region}</h3>
              <h3>Capital:{capital}</h3>
              </div>
            </div>
          </article>
            
           
          
          })
        }
       
    </div>

      
    </>
  )
}
