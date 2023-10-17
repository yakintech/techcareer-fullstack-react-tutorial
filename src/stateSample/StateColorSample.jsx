import React, { useState } from 'react'

function StateColorSample() {

    const [color, setcolor] = useState('')

    return (<>
        <div>
            <label htmlFor="">Color</label>
            <input type="text" onChange={(e) => setcolor(e.target.value)} />
        </div>
        <div style={{width:300, height:300, backgroundColor:color}}>

        </div>
    </>)
}

export default StateColorSample