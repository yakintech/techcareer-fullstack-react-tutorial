import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

function ContactPage() {

 const {counter, setcounter } =  useContext(CounterContext)

  return (<>
    <h1>{counter}</h1>
    <button onClick={() => setcounter(0)}>Empty</button>
  </>
  )
}

export default ContactPage