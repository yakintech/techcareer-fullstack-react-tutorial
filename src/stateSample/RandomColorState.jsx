import React, { useState } from 'react'

function RandomColorState() {

    const [color, setcolor] = useState('black');

    var randomColors = ["blue", "black", "brown","pink", "red", "tomato", "yellow", "purple","green", "orange", "gray"]

    const change = () => {
        var randomColorIndex = Math.floor(Math.random() * randomColors.length);

        setcolor(randomColors[randomColorIndex])

    }


    return (<>
        <button onClick={() => change()}>Change</button>
        <div style={{ width: 300, height: 300, backgroundColor: color }}>

        </div>
    </>)
}

export default RandomColorState