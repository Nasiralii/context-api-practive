import React, { useEffect } from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
function index() {
    const a=useContext(NoteContext)
    useEffect(()=>{
        a.update()
    },[])
  return (
    <div>This is home page and my name  {a.state.name}</div>
  )
}

export default index