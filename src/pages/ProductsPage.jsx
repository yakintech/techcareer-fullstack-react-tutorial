import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'

function ProductsPage() {

    const [products, setproducts] = useState([])

    const { favorites, setfavorites } = useContext(FavoritesContext)

    useEffect(() => {
        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data)
            })
    }, [])

    const add = (item) => {

        var favControl = favorites.find(q => q.id == item.id)

        if (!favControl)
            setfavorites([...favorites, item])

    }

    return (<>

        <ul>
            {
                products.map(item => <>
                    <li key={item.id}>{item.name}</li>
                    <button onClick={() => add(item)}>Add To Fav</button>
                </>)
            }
        </ul>
    </>
    )
}

export default ProductsPage