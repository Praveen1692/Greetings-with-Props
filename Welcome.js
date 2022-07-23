import React from 'react'


const Welcome=props=>{
    const{name}=props
    return(
        <div>
           
            <h1>Hey ! {name}</h1>
            <h2> Welcome to Newton School</h2>
        </div>
        
    )
}


export default Welcome;