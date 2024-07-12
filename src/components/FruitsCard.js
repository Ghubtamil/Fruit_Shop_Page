import React from 'react'

const FruitsCard = ({fruit}) => {
  return (
    <div className='rounded-2xl overflow-hidden  shadow-xl tranform hover:scale-110 duration-100'>
        <img src={require(`../assests/${fruit.image}.jpeg`)} alt={`${fruit.image}`}
            className='w-full h-52 object-cover	'/>
        <div className='flex flex-col items-center my-2 py-2'>
            <span className='font-body text-slate-500 block'>{fruit.name}</span>
            <span className='font-body text-slate-500'>₹{fruit.price}</span>
        </div>
    </div>
  )
}

export default FruitsCard