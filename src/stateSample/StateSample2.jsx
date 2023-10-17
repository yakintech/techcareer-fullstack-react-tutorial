import React, { useState } from 'react'

function StateSample2() {

    const [cities, setcities] = useState(["İzmir", "İstanbul", "Ankara", "Aydın"])

    return (<>

        <h1>Cities: {cities.length}</h1>
        <button onClick={() => setcities([])}>Empty</button>
        <ul>
            {
                cities.map(item => <li>{item}</li>)
            }
        </ul>

    </>)
}

export default StateSample2