import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Mom = () => {
    const [congratulations, setCongratulations] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const {data} = await axios.get(
                    'https://momdr.herokuapp.com/congratulations'
                )
                setCongratulations(data)
            }
            catch (e) {
                console.log(e)
            }
        }
        if (loading){
            fetchData()
            setLoading(false)
        }
        
    } )
  return (
    <div>
        <h1 className='md:text-6xl text-4xl text-center font-bold '>Поздравляю тебя с днем рождения!!! ❤️</h1> <br/>
        <h1 className='md:text-6xl text-4xl text-center font-semibold'>Желаю счастья, здоровья, любви и всего наилучшего!!!❤️❤️❤️</h1>
        <h1 className=' text-7xl text-center animate-ping'>🎉🎉🎉</h1>
        <h1 className=' text-7xl text-center animate-ping'>🎉🎉🎉🎉🎉</h1>
        <h1 className=' text-7xl text-center animate-ping'>🎉🎉🎉🎉🎉🎉</h1>
        <h1 className='text-4xl m-7 font-semibold'>Тут пожелания твоих знакомых и друзей, их тут {congratulations.length} штук:</h1>
        <br/>
        {congratulations.map((congratulation, inx) => (
            <><div className='mx-auto block shadow-2xl w-96 bg-green-300 rounded-md '>
                <h1 className='md:text-3xl text-2xl p-5 font-bold '>Поздравление от {congratulation.fullname}</h1>
                <h3 className='md:text-xl text-lg font-medium mx-6'>{congratulation.title}</h3>
                <h3 className='md:text-xl text-lg font-semibold mx-8'>{congratulation.description}</h3><br/>
            </div><br></br></>
        ))}
        <h1 className='text-2xl font-bold text-center'>Все эти люди ценят и любят тебя!!❤️❤️❤️</h1>
    </div>
  )
}

export default Mom