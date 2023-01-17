import styles from './Providers.module.css';

import EditModal from '../others/EditModal';
import Table from '../others/Table';

import { useState, useEffect } from 'react';


function Providers() {

  const [prov, setProv] = useState([]);

  useEffect(() =>{
    fetch('https://localhost:5001/providers/list', {
      method: 'GET'
    })
    .then(resp => resp.json())
    .then(data => {
      setProv(data)
      console.log(data)
    })
  }, [])


  return (
    <>
    
      <Table prov={prov}/>
      
      <EditModal />
      
    </>
  )
}

export default Providers;