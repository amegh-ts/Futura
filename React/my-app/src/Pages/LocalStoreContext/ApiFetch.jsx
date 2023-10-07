import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from './Context';
import axios from 'axios';

const ApiFetch = () => {
  const { dispatch } = useContext(UserContext);
  const [state, setState] = useState([]);

  useEffect(() => {
    async function fetchData() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setState(response.data);


      dispatch({type:'LoginSucces',payload:(response.data)})
    }

    fetchData();
  }, []);

  console.log('State data', state);

  return (
    <div>
     ghfhfhfhgf
    </div>
  );
};

export default ApiFetch;
