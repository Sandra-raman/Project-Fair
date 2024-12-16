import React, { createContext, useState } from 'react'

//1 create context
export const addProjectContextResponse=createContext()
export const EditProjectContextResponse=createContext()
function ContextShare({children}) {
    //2 create a state
    const [addProjectContext,setaddProjectContext]=useState("")
    const[editContext,seteditContext]=useState("")
  return (
    <div>
        <addProjectContextResponse.Provider value={{addProjectContext,setaddProjectContext}}>
          <EditProjectContextResponse.Provider value={{editContext,seteditContext}}>
          {children}
          </EditProjectContextResponse.Provider>
        </addProjectContextResponse.Provider>
    </div>
  )
}

export default ContextShare