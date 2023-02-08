import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'

const SingleCountry = () => {
    const { name } = useParams();
    const [country, setCountry] = useState([]);


    useEffect(() => {
        const singleCountryDetails = async () => {
            const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
            const data = await res.json();
            setCountry(data);
        }
        singleCountryDetails();
    }, [name])


    return (
        <section className='p-8 h-screen flex items-center justify-center gap-16'>
            {
                country.map((item) => {
                    return <div key={item.population} className="md:flex gap-16">
                        <img src={item.flags.png} alt="" />
                        <div className='mt-4'>
                            <h1 className='text-2xl font-bold'>{item?.name?.common}</h1>
                            {
                             item.capital &&  <p className='text-gray-600'>Capital: {item?.capital[0]}</p>
                            }
                            <p className='text-gray-600'>Population: {item?.population.toLocaleString()}</p>
                            <p className='text-gray-600'>Region: {item?.region}</p>
                            <p className='text-gray-600'>Subregion: {item?.subregion}</p>
                            <div> <span className='font-bold'>Borders:</span> 
                                <ul className="flex gap-2">
                                    {
                                       item.borders ? item.borders.map((ele, i) => {
                                            return <div key={i} className="px-2 py-1 bg-slate-500 rounded">
                                                <li> {ele}</li>
                                            </div>
                                        }) : "No Border"
                                    }
                                </ul>
                            </div>

                            <Link to="/"><p className='mt-4 text-lg px-2 py-1 bg-slate-300 rounded inline-block hover:bg-emerald-300'><i className='bx bx-left-arrow-alt'></i> Back</p></Link>


                        </div>
                    </div>
                })
            }


        </section>
    )
}

export default SingleCountry