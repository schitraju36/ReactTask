import React, { useState, useEffect } from 'react'  
import Axios from 'axios';  
function GetEmployeeById() {  
    const [data, setData] = useState([]);  
    const [name, setName] = useState("555");
  
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${name}`)
       
    }
    useEffect(() => { 
        Axios  
            .get("http://localhost:8080/getCatererByid/555")  
            .then(result => setData(result?.data));  
        console.log(data); 
    }, []); 
  
    return (  
        <div>
            <h3>Caterer Details</h3>
            <form onSubmit={handleSubmit}>
        <label>
         Please Enter Caterer ID:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>  
             
            <table class="table table-bordered" >  
                <thead class="thead-dark">  
                    <tr>  
                        <th scope="col">caterId</th> 
                        <th scope="col">Name</th> 
                        <th scope="col">City</th>  
                        <th scope="col">Street</th>  
                        <th scope="col">PostalCode</th>  
                        <th scope="col">MinCapacity</th>  
                        <th scope="col">MaxCapacity</th> 
                        <th scope="col">Email</th>  
                        <th scope="col">MobileNo</th> 
                        <th scope="col">PhoneNo</th>  
                    </tr>  
                </thead>  
               {  <tbody>  
                    {data.detailsTo.map(item => {  
                        return <tr key={item.caterId}>
                            <td>{item.caterId}</td>  
                            <td>{item.name}</td>  
                            <td>{item.location?.city}</td>  
                            <td>{item.location?.street}</td>  
                            <td>{item.location?.postal_code}</td>  
                            <td>{item.capacity?.minimum_guests}</td>  
                            <td>{item.capacity?.maximum_guests}</td>  
                            <td>{item.contactInfo?.email}</td> 
                            <td>{item.contactInfo?.mobie_number}</td> 
                            <td>{item.contactInfo?.phone_number}</td> 
                        </tr>  
                    })}  
                </tbody> 
}
            </table>  
  
        </div>  
    )  
}  
  
export default GetEmployeeById