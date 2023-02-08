import React, { useEffect, useState } from 'react'
import Country from './Country';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const regions = [
    {
      name: "Asia"
    },
    {
      name: "Europe"
    },
    {
      name: "Africa"
    },
    {
      name: "Oceania"
    },
    {
      name: "Americas"
    },
    {
      name: "Antarctic"
    }
  ];

  // filter by region 
  const handleSelect = (e) => {
    // console.log(e.target.value)
    const regionValue = e.target.value;

    const fetchByRegion = async () => {
      const res = await fetch(`https://restcountries.com/v3.1/region/${regionValue}`);
      const data = await res.json();
      setCountries(data);
    }
    fetchByRegion();

  }

 


  useEffect(() => {
    const fetchingMyAPI = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    }
    fetchingMyAPI();
  }, [])

  return (
    <section className='p-8'>
      <div className='flex flex-col gap-4 md:flex-row md:justify-between'>
        {/* search  */}
        <form className='md:flex-1 max-w-3xl'>
          <input
            className='p-4 w-full shadow-lg placeholder-slate-50 bg-zinc-400 rounded'
            type="text"
            name=""
            placeholder='Enter Country'
            
          />
        </form>
        {/* filter by region select option  */}
        <form>
          <select
            name="filter-by-region"
            id="filter-by-region"
            onChange={(e) => handleSelect(e)}
            className='p-4 w-52 bg-zinc-400 rounded'>
            {
              regions.map((region, index) => (
                <option key={index} value={region.name}>{region.name}</option>
              ))
            }
          </select>
        </form>
      </div>

      {/* show data  */}
      <div className='mt-4 grid place-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {
          countries.map((country, i) => (
            <Country key={country.name.common} {...country} />
          ))
        }
      </div>
    </section>
  )
}

export default Countries