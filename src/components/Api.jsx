import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../components/css/api.css'
import { BiSearchAlt } from "react-icons/bi";
export const Api = () => {
    const [user, setUser]= useState([])
    const [usuario, setUsuario]= useState("")
    const apidata = "https://api.github.com/users/CharlesDav1d"
    const verApi= async()=>{
        const data = await axios.get(apidata)
        setUser([data.data])
    }
    useEffect(()=>{
        verApi()
    },[])
  const hadleSubmit=(e)=>{
  e.preventDefault()
  const usuariogit = e.target.usuario.value;
  setUsuario(usuariogit)
  console.log(usuario);
  setUsuario("")
  }
  console.log(user);
  return (
<div className='cont'>
    <form className='formulario' onSubmit={hadleSubmit}>
        <h1>Find your profile</h1>
           <div className='input'>
                <input type="text" name='usuario' className='input-0' value={usuario} onChange={(e)=>{
                    setUsuario(e.target.value)
                }} />
                <button className='boton'>
                    <BiSearchAlt className='icono'/>
                </button>
            </div> 
    </form>
</div>
  )
}
