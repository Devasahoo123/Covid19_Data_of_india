import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './StateWise.css'



function StateWise() {

  const [data,setData]=useState([]);
  const getCovidData =async()=>{
    try {
      const res = await fetch("https://data.covid19india.org/data.json");

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const actualData = await res.json();
      console.log(actualData.statewise);
      setData(actualData.statewise);
    } catch (error) {
      console.error('Error fetching COVID-19 data:', error);
    }
  }
  useEffect(()=>{
    getCovidData();
  },[])
  return (
    <>
      
      <div className="container-fluid mt-5">
        <center>
          <div className="main-heading">
            <h1 className="mb-15 text-center"><span className="font-weight-bold">Indias</span>  Covid-19 Dashboard</h1>
          </div>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="thead-dark">
                <tr className='headingSt'>
                  <th>State</th>
                  <th>Confirmed</th>
                  <th>recovered</th>
                  <th>death</th>
                  <th>active</th>
                  <th>update</th>
                </tr>
              </thead>
              <tbody>
              {
                data?.map((curElm, ind) => (
                  <tr key={ind}>
                    <td>{curElm.state}</td>
                    <td>{curElm.confirmed}</td>
                    <td>{curElm.recovered}</td>
                    <td>{curElm.deaths}</td>
                    <td>{curElm.active}</td>
                    <td>{curElm.lastupdatedtime}</td>
                  </tr>
                ))
              }

                
              
              </tbody>
            </table>
          </div>
        </center>
      </div>
    </>
  )
}

export default StateWise
