import React from 'react'
import { Link } from 'react-router-dom'

const Country = ({flags, name, population, region, subregion}) => {

  return (
    <>
        <Link to={`/${name.common}`}>
        <div className="shadow-md rounded-lg">
            <img className='md:h-56 w-full' src={flags.png} alt="" />
            <div className='p-2'>
              <h4 className='font-bold'>{name.common}</h4>
              <p className='text-gray-500'>Population: {population.toLocaleString()}</p>
              <p className='text-gray-500'>Region: {region}</p>
              <p className='text-gray-500'>Subregion: {subregion}</p>
            </div>
          </div>
        </Link>
    </>
  )
}

export default Country