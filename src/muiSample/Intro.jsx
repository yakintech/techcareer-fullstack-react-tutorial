import { Alert, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

function Intro() {

    const [name, setname] = useState('')
    
    return (<>
        <TextField variant='outlined' onChange={(e) => setname(e.target.value)} />
        <Button variant='contained'>Hello</Button>
        <Alert severity="error">This is an error alert — check it out!</Alert>
    </>)
}

export default Intro