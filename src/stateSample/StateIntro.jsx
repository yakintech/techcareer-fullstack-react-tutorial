import React, { useState } from 'react'

function StateIntro() {

    console.log('Hello');
    
    const [counter, setcounter] = useState(0)


    const increase = () => {
        setcounter(counter + 1)
        //counter = counter + 1
    }

    return (<>
        <h1>{counter}</h1>
        <h1>{counter}</h1>
        <h1>{counter}</h1>
        <h1>{counter}</h1>
        <button onClick={increase}>Increase</button>
    </>
    )
}

export default StateIntro




