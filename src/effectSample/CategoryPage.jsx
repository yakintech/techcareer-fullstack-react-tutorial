import axios from 'axios'
import React, { useEffect, useState } from 'react'

function CategoryPage() {

    const [name, setname] = useState("")
    const [description, setdescription] = useState("")

    const [categories, setcategories] = useState([]);

    useEffect(() => {

        loadCategories()

    }, [])


    const add = () => {

        let newCategory = {
            name,
            description
        }
        axios.post('https://northwind.vercel.app/api/categories', newCategory)
            .then(res => {
                loadCategories()
            })

    }


    const loadCategories = () => {
        axios.get('https://northwind.vercel.app/api/categories')
            .then(res => {
                setcategories(res.data)
            })
    }

    const deleteCategory = (id) => {

        let result = window.confirm("Are you sure?")

        if (result) {
            axios.delete(`https://northwind.vercel.app/api/categories/${id}`)
                .then(res => {
                    loadCategories()
                })
        }


    }

    return (<>
        <h1>Add Category</h1>
        <div>
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Description</label>
            <input type="text" value={description} onChange={(e) => setdescription(e.target.value)} />
        </div>
        <div>
            <button onClick={add}>Add</button>
        </div>

        <hr />

        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    categories && categories.map(item => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td><button onClick={() => deleteCategory(item.id)}>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    </>)
}

export default CategoryPage