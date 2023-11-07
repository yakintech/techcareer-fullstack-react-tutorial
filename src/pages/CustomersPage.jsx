import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

function CustomersPage() {

    const {data, isLoading, error} = useQuery("fetchCustomers", () => {
        return axios.get('https://northwind.vercel.app/api/customers').then(res => res.data)
    }
    // {refetchInterval: 5000}
    )

  return (<>
    {
        isLoading == true ? <h1>loading...</h1> : <>
            <ul>
                {
                    data.map(item => <li key={item.id}>{item.companyName}</li>)
                }
            </ul>
        </>
    }
  </>
  )
}

export default CustomersPage