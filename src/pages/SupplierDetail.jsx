import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function SupplierDetail() {

    var { id } = useParams();
    const [detail, setDetail] = useState({});

    const navigate = useNavigate();

    useEffect(() => {

        axios.get(`https://northwind.vercel.app/api/suppliers/${id}`)
            .then(res => {
                setDetail(res.data)
            })
            .catch(err => {
                console.log('Err', err);
            })

    }, [])


    return (<>
        <button onClick={() => navigate(-1)}>Go back!</button>
        <h1>ID: {id}</h1>

        <div>
            <h2>Company Name: {detail.companyName}</h2>
            <h2>City: {detail.address?.city}</h2>
            <h2>Country: {detail.address?.country}</h2>

        </div>
    </>)
}

export default SupplierDetail