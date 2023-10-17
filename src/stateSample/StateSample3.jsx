import React, { useState } from 'react'

function StateSample3() {

    const [numbers, setnumbers] = useState([3, 11, 20, 33])

    const add = () => {
        var randomNumber = Math.floor(Math.random() * 1000);

        //numbers.push(randomNumber);
        setnumbers([...numbers, randomNumber])

        // setnumbers([...numbers, randomNumber])
    }

    return (<>
        <button onClick={() => setnumbers([])}>Empty</button>
        <h1>Length: {numbers.length}</h1>
        <button onClick={add}>Add</button>
        <ul>
            {
                numbers.map(item => <li>{item}</li>)
            }
        </ul>
    </>)
}

export default StateSample3