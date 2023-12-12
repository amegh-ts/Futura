import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { getIdData } from '../../ApiCalls';
import { IoMoonOutline } from "react-icons/io5";


const Dashboard = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const apiData = await getIdData();
        console.log('Data from API:', apiData);
        setData(apiData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <section className="user-dash-main">
        <div>
          <p>Welcome {data.uname}</p>
        </div>
        <div className='udm-up-body'>
          <div className='udm-up-image'>
            {/* <img src="/Images/people.svg" alt="" /> */}
            <h1><IoMoonOutline />  </h1>
          </div>
          <div className='udm-up-analytic'>
            <div className='cards-1'>
              <div className='udm-up-card1'>
                <p>Runtime</p>
                <h3>200hr</h3>
                <p>2$$$</p>
                <p>2$$$</p>
              </div>
              <div className='udm-up-card2'>
                <p>Runtime</p>
                <h3>200hr</h3>
                <p>2$$$</p>
                <p>2$$$</p>
              </div>
            </div>
            <div className='cards-2'>
              <div className='udm-up-card3'>
                <p>Runtime</p>
                <h3>200hr</h3>
                <p>2$$$</p>
                <p>2$$$</p>
              </div>
              <div className='udm-up-card4'>
                <p>Runtime</p>
                <h3>200hr</h3>
                <p>2$$$</p>
                <p>2$$$</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Dashboard