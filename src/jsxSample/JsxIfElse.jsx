import React from 'react'

function JsxIfElse() {

    let name = "Çağatay Yıldız";
    let age = 18;

    var product = {
        name: 'IPhone',
        price: 5500
    }

    var onlineStatus = false;


    return (<>
        <h1>Name: {name}</h1>
        <h1>Age: {age}</h1>
        <hr />
        <h1>Product Name: {product.name}</h1>
        <h1>Product Price: {product.price}</h1>
        <hr />
        {/* Online status true ise "User Online" değilse "User Offline" yazsın! */}

        {
            onlineStatus ? <h1>User Online</h1> : <h1>User Offline</h1>
        }
        
    </>)
}

export default JsxIfElse