import React from 'react'

function JsxArraySample() {

  var cities = ["İstanbul", "İzmir", "Ankara", "Trabzon", "Diyarbakır", "Erzurum", "Edirne"]

  return (<>
    <ul>
        {
            cities.map((item) => <li>{item}</li>)
        }
    </ul>
  </>)
}

export default JsxArraySample