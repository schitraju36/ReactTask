import React, { useState, useEffect } from 'react'  
import Axios from 'axios';  
function GetEmployee() {  
    const [data, setData] = useState([]);  
  
    useEffect(() => { 
        Axios  
            .get("http://localhost:8080/getCatererByLocation?size=5")  
            .then(response => response.json())
            .then(data => setData(data)); 
        console.log(data); 
    }, []);  
    return (  
        <div>  
             
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
                <tbody>  
                    {data.tutorials.map(item => {  
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
            </table>  
  
        </div>  
    )  
}  
  
export default GetEmployee