import React from 'react'

const Home = () => {
  return (
    <div className='mx-auto block shadow-2xl w-96 h-96 bg-green-300 text-center rounded-md '>
      <h1 className='md:text-3xl text-2xl p-5 font-bold '>Привет, пользователь! 👋</h1>
      <h3 className='md:text-xl text-lg font-medium mx-6'>Ты, наверняка, попал на данный сайт по ссылке которую вам скинули</h3>
      <h3 className='md:text-xl text-lg font-semibold mx-8'>Если вы зашли добавить поздравление, сверху на меню есть кнопка 📍</h3><br></br>
      <a href="/mom" className='w-60 h-15 p-5 m-auto bg-lime-200 font-bold text-center rounded-md block shadow-2xl'>Для именинницы ❤️</a>
    </div>
  )
}

export default Home