import React from "react";


  export function Header(prompt){
    return(
        <div style={{
            backgroundColor:"red",padding:20,width:400
        }}>
            <h1>{prompt.title}</h1>
            <h1>{prompt.name}</h1>
            <h1>This is header component for learning purpose</h1>
            
        </div>
    )
}
