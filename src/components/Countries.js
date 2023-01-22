import React, { useEffect, useState } from 'react'
import Country from './Country';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchingMyAPI = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    }
    fetchingMyAPI();
  }, [])

  return (
    <section className='p-4 grid place-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
      {
        countries.map((country) => (
          <Country key={country.name.common} {...country} />
        ))
      }
    </section>
  )
}

export default Countries