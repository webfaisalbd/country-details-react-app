import React from 'react'

const Country = ({flags, name, population, region, subregion}) => {
  return (
    <>
        <div className="shadow-md rounded-lg">
            <img className='md:h-56' src={flags.png} alt="" />
            <div className='p-2'>
              <h4 className='font-bold'>{name.common}</h4>
              <p className='text-gray-500'>Population: {population.toLocaleString()}</p>
              <p className='text-gray-500'>Region: {region}</p>
              <p className='text-gray-500'>Subregion: {subregion}</p>
            </div>
          </div>
    </>
  )
}

export default Country