import React from 'react'

const Header = () => {
  return (
    <div className='bg-green-500 shadow-2xl mx-2 p-1 md:h-24 h-16 flex rounded-md'>
        <h1 className='md:text-3xl md:m-3 m-2 p-2  text-white'>
            <a href='/'>MOMDR ❤️</a>
        </h1>
        <div className='right-5 absolute top-4'>
        <ul >
            <li className='md:text-2xl text-white '>

                <a href='/create'>Добавить поздравление 🎉</a>

            </li>
            <li className='md:text-2xl text-white'>

                <a href='/mom'>Вы мама? 🤷‍♀️</a>

            </li>
        </ul>
        </div>
    </div>
  )
}

export default Header