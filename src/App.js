import {useState,useEffect} from 'react'
import './App.css';

function App() {
  let [data_,setData] = useState([])
  const API = `https://jsonplaceholder.typicode.com/users`
  const getData=async ()=>{
  const response = await fetch(API)
    let data = await response.json()
    setData(data)
    // console.log(data)
  } 
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      <table id='table'>
        <tr>
          <th id='th'>Id</th>
          <th id='th'>Name</th>
          <th id='th'>UserName</th>
          <th id='th'>Email</th>
          <th id='th'>Company Name</th>
          <th id='th'>Zipcode</th>
        </tr>
      </table>
      {
        data_.map((item,index)=>{
          return(
            <div>
              <table id='table'>
                <tr>
                    <td id='td'><h5>{item.id}</h5></td>
                    <td id='td'><h5>{item.name}</h5></td>
                    <td id='td'><h5>{item.username}</h5></td>
                    <td id='td'><h5>{item.email}</h5></td>
                    <td id='td'><h5>{item.company.name}</h5></td>
                    <td id='td'><h5>{item.address.zipcode}</h5></td>
                </tr>
              </table>
            </div>
        )})
      }
    </div>
  )
}

export default App;