import React, { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'

function Favorites() {

    const { favorites, setfavorites } = useContext(FavoritesContext)

    const remove = (item) => {

        var filteredFavorites = favorites.filter(q => q.id != item.id)
        setfavorites(filteredFavorites)
    }
    return (<>
        <h1>Count: {favorites.length}</h1>
        <button onClick={() => setfavorites([])}>Empty</button>
        <ul>
            {
                favorites.map((item) => <>
                    <li key={item.id}>{item.name}</li>
                    <button onClick={() => remove(item)}>Remove</button>
                </>)
            }
        </ul>
    </>
    )
}

export default Favorites