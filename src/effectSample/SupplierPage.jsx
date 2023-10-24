import axios from 'axios'
import React, { useEffect, useState } from 'react'

function SupplierPage() {

    const [suppliers, setsuppliers] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        loadSuppliers();
    }, [])


    const loadSuppliers = () => {
        axios.get('https://northwind.vercel.app/api/suppliers')
            .then(res => {
                setsuppliers(res.data)
                setloading(false)
            })
    }

    const deleteSupplier = (id) => {

  
        var result = window.confirm("Are you sure?")

        if (result) {
            setloading(true)
            axios.delete(`https://northwind.vercel.app/api/suppliers/${id}`)
                .then(res => {
                    loadSuppliers()
                })
        }



    }

    return (<>
        {
            loading ? <h1>loading...</h1> : <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Company Name</th>
                        <th>Contact Name</th>
                        <th>Contact Title</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        suppliers && suppliers.map(item => {
                            return <tr>
                                <td>{item.id}</td>
                                <td>{item.companyName}</td>
                                <td>{item.contactName}</td>
                                <td>{item.contactTitle}</td>
                                <td><button onClick={() => deleteSupplier(item.id)}>Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        }

    </>
    )
}

export default SupplierPage