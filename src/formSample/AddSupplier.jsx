import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { object, string, number, date, InferType } from 'yup';


const addSupplierSchema = object().shape({
    companyName: string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Boş geçilemez'),
    contactName: string()
        .required('Boş geçilemez'),
    contactTitle: string()
        .required('Boş geçilemez')
        .email("Email formatında giriniz"),
});


function AddSupplier() {

    const formik = useFormik({
        initialValues: {
            companyName: '',
            contactName: '',
            contactTitle: '',

        },
        validationSchema: addSupplierSchema,
        onSubmit: values => {
            addSupplier(values)
        },
    });


    const addSupplier = (data) => {
        axios.post('https://northwind.vercel.app/api/suppliers', data)
            .then(res => {
                console.log(res);
                alert('Success')
            })
    }

    return (<>

        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="">Company Name </label>
                <input
                    name='companyName'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.companyName}
                />
                {
                    formik.errors.companyName ? <span style={{ color: 'red' }}>{formik.errors.companyName}</span> : <></>
                }
            </div>

            <div>
                <label htmlFor="">Contact Name </label>
                <input
                    name='contactName'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.contactName} />
                {
                    formik.errors.contactName ? <span style={{ color: 'red' }}>{formik.errors.contactName}</span> : <></>

                }
            </div>

            <div>
                <label htmlFor="">Contact Title </label>
                <input
                    name='contactTitle'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.contactTitle} />
                {
                    formik.errors.contactTitle ? <span style={{ color: 'red' }}>{formik.errors.contactTitle}</span> : <></>

                }

            </div>

            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
    </>)
}

export default AddSupplier