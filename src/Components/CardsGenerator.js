import React from 'react';
import Data from './Data';

const CardsGenerator = () => {
  return (
    <div className='cards--generator--container'>
        {Data.map((item) => (
            <div key={item.id} className='cards--generator--container--content'>
                <div className="image">{item.img}</div>
                <div className="name">{item.name}</div>
                <div className="color">{item.color}</div>
            </div>
        ))}
    </div>
  )
}

export default CardsGenerator
