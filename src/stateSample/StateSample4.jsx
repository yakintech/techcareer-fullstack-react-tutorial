import React, { useState } from 'react'

function StateSample4() {
    
    const [name, setname] = useState('')
    const [names, setnames] = useState([])

    const add = () => {
        setnames([...names, name])
    }

    return (<>
        <div>
            <label htmlFor="">Name</label>
            <input type="text" onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <button onClick={add}>Add</button>
        </div>
        <div>
            <ul>
                {
                    names.map(item => <li>{item}</li>)
                }
            </ul>
        </div>
    </>)
}

export default StateSample4