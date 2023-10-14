
import React from 'react'

function JsxEventSample() {

    const hello = () => {
        alert('Hello Reactjs')
    }

    return (<>
        <button onClick={hello}>Hello</button>
        <button onClick={() => hello()}>Hello - 2</button>
    </>
    )
}

export default JsxEventSample