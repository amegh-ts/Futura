import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { getIdData } from '../../ApiCalls';

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
            <img src="/Images/people.svg" alt="" />
          </div>
          <div className='udm-up-analytic'>
            <div className='cards-1'>
              <div className='udm-up-card1'>1</div>
              <div className='udm-up-card2'>2</div>
            </div>
            <div className='cards-2'>
              <div className='udm-up-card3'>3</div>
              <div className='udm-up-card4'>4</div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Dashboard