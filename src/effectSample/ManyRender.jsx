import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ManyRender() {

    //const [randomNumber, setrandomNumber] = useState(0)
    //var x = Math.random() * 1000;
    //setrandomNumber(x)
    const [products, setproducts] = useState([])


    console.log('Hello');


    useEffect(() => {
        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data)
            })
    }, [])


    return (<>
        {/* <h1>{randomNumber}</h1> */}

        <ul>
            {
                products && products.map(item => <li>{item.name}</li>)
            }
        </ul>
    </>)
}

export default ManyRender