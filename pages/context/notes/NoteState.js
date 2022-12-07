
import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState=(props)=>{
    const s1={
        name:"Nasir Ali"
    }
    const [state,setState]=useState(s1)
    const update=()=>{
        setTimeout(() => {
            setState({
                name:"Hamdan Khan"
            })
            
        }, 2000);
    }
return(
      <NoteContext.Provider value={{state,update}}>
        {props.children}
      </NoteContext.Provider>
)
}
export default NoteState