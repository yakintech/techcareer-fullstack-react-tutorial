import React from 'react'
import { products } from '../data/productsData'

function JsxObjectArraySample() {



  return (<>
    <table className='w3-table w3-striped'>
      <thead>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Unit Price</td>
          <td>Stock</td>
        </tr>
      </thead>
      <tbody>
        {
          products && products.map((item) => {
            return <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.unitPrice}</td>
              <td>{item.unitsInStock}</td>
            </tr>
          })
        }
      </tbody>
    </table>

  </>)
}

export default JsxObjectArraySample