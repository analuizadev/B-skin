import styles from './Table.module.css';

import {RxPencil1} from 'react-icons/rx';
import {TiDeleteOutline} from 'react-icons/ti';

import Modal from '../others/Modal';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


function Table(){

    const [provider, setProvider] = useState([])

    const [open, setOpen] = useState(false)

    function providerList() {
        fetch('https://localhost:5001/providers/list', {
          method: 'GET'
        })
        .then(resp => resp.json())
        .then(data => {
          setProvider(data)
        })
    }

    useEffect(() =>{
        providerList();
    })

    function details(id) {
        window.location.href=`providers/details/${id}`
    }

    const [idProvi, setId] = useState(0)

    function qualquer(id){
        setOpen(true)
        setId(id)
    }


    return(
        <>

            <div className={styles.table}>

            <table id="providersTb">
                <caption>Providers</caption>

                <div className={styles.radius}>
                    <thead>
                        <div className={styles.interactive}>
                            <tr>
                                <th>Name</th>
                                <th className={styles.document_none}>Document</th>
                                <th>Active</th>
                                <th></th>
                            </tr>
                        </div>
                    </thead>

                        <tbody>
                        <div id="providers" className={styles.scroll}>
                            {
                                provider.map(providers => {

                                    return(
                                        <tr key={providers.id}>
                                            <td className={styles.name} onClick={() => details(providers.id)}>{providers.name}</td>
                                            <td className={styles.document_none}>{providers.document}</td>
                                            {providers.isActive === true ? (
                                                <td className={styles.on}></td>
                                            ) : <td className={styles.off}></td>}
                                            <td>
                                            <button><Link to={`/providers/update/${providers.id}`}><RxPencil1 /></Link></button> <span>
                                                <button onClick={() => qualquer(providers.id)}><TiDeleteOutline /></button></span>
                                            </td>
                                        </tr>
                                    )
                                })
                                
                            }
                        </div>
                    </tbody>
                </div>
            </table>

            </div>
            {open && <Modal openModal={setOpen} idProv={idProvi} />}
        </>
    )
}

export default Table