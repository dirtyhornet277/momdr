import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Error from "./Error"
    
const Create = () => {
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [name, setName] = useState()
  const history = useNavigate();
  const createData = (t, d, n) => {
    axios(
      {
        method: "post",
        url: "https://momdr.herokuapp.com/congratulations",
        data: {
          title: t,
          description: d,
          fullname: n
    }
  }
  ).catch(
    history("/error")
  ).then(
    history("/yeah")
  )
  
  }
  return (
    <div className='mx-auto block shadow-2xl w-96 h-96 bg-green-300 text-center rounded-md '>
      <div>
        <h1 className='md:text-3xl text-2xl p-5 font-bold '>Добавить поздравление</h1>
        <input type="text" className='box-border block text-center m-auto w-80 h-10 rounded-md' placeholder="Заголовок 👁️‍🗨️" onChange={ (e) => setTitle(e.target.value)}></input><br></br>
        <textarea type="text" className='box-border block text-center m-auto w-80 h-20 rounded-md' placeholder="Поздравление 🎉" onChange={ (e) => setDescription(e.target.value)}></textarea><br/>
        <input type="text" className='box-border block text-center m-auto w-80 h-10 rounded-md' placeholder='Ваше имя 😺' onChange={ (e) => setName(e.target.value)}></input>
        <button className="m-4 inline-block border-box bg-green-200 text-2xl w-48 h-9 rounded-md" onClick={() => {createData(title, description, name)}}>Отправить 😉</button>
      </div>
    </div>
  )
}

export default Create