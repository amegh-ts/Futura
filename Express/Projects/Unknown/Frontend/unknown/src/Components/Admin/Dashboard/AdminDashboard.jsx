import React, { useEffect, useState } from 'react'
import './AdminDashboard.css'
import { IoPersonOutline } from "react-icons/io5";
import { getUsers } from '../../ApiCalls';


const AdminDashboard = () => {
  const [state, setState] = useState(0)
  const [admins, setAdmin] = useState(0)
  const [clients, setClients] = useState(0)

  useEffect(() => {
    async function display() {
      try {
        const allusers = await getUsers();
      setState(allusers.length)

      const admins = allusers.filter(user => user.type === 'admin');
      setAdmin(admins.length);

      const clients = allusers.filter(user => user.type === 'admin');
      setClients(clients.length)
      } catch (error) {
        console.log(error);
      }
    }
    display()

  }, [])
  return (
    <div>
      <section className='admin-dash-main'>
        <div className='admin-dash-top'>
          <div className='admin-dash-header'>
            <i className='bx bx-home-alt icon' ></i>
            <h3>Dashboard</h3>
          </div>
          <div className="admin-dash-body">
            <div className="admin-dash-card b-card1">
              <i>
                <IoPersonOutline />
              </i>
              <p>Admins</p>
              <span>{admins}</span>
            </div>
            <div className="admin-dash-card b-card2">
              <i>
                <IoPersonOutline />
              </i>
              <p>Clients</p>
              <span>{clients}</span>
            </div>
            <div className="admin-dash-card b-card3">
              <i>
                <IoPersonOutline />
              </i>
              <p>Total Users</p>
              <span>{state}</span>
            </div>
            <div className="admin-dash-card b-card4">
              <i>
                <IoPersonOutline />
              </i>
              <p>Users</p>
              <span>200</span>
            </div>
          </div>
        </div>

        <div className='admin-dash-bottom'>
          <div className='admin-dash-header'>
            <i className='bx bx-time' ></i>
            <h3>Recent</h3>
          </div>
          {/************** table *************/}
          <div>
            <table>
              <thead>
                <tr>
                  <th>Invoice</th>
                  <th>Company</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="#1">INV__1001</a></td>
                  <td>Paragon</td>
                  <td>1/5/2021</td>
                  <td>
                    <p className="status status-unpaid">Unpaid</p>
                  </td>
                  <td className="amount">$520.18</td>
                </tr>
                <tr>
                  <td><a href="#2">INV__1002</a></td>
                  <td>Sonic</td>
                  <td>1/4/2021</td>
                  <td>
                    <p className="status status-paid">Paid</p>
                  </td>
                  <td className="amount">$415.25</td>
                </tr>
                <tr>
                  <td><a href="#3">INV__1003</a></td>
                  <td>Inner circle</td>
                  <td>1/2/2021</td>
                  <td>
                    <p className="status status-pending">Pending</p>
                  </td>
                  <td className="amount">$1324.84</td>
                </tr>
                <tr>
                  <td><a href="#4">INV__1004</a></td>
                  <td>Varsity Plus</td>
                  <td>12/30/2020</td>
                  <td>
                    <p className="status status-pending">Pending</p>
                  </td>
                  <td className="amount">$998.26</td>
                </tr>
                <tr>
                  <td><a href="#5">INV__1005</a></td>
                  <td>Highlander</td>
                  <td>12/18/2020</td>
                  <td>
                    <p className="status status-paid">Paid</p>
                  </td>
                  <td className="amount">$1152.35</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AdminDashboard