import styles from './Table.module.css';

import {RxPencil1} from 'react-icons/rx';
import {TiDeleteOutline} from 'react-icons/ti';

import EditModal from '../others/EditModal';
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import Message from './Message';


function Table(){

    const [type, setType] = useState()
    const [message, setMessage] = useState('')
    const [resp, setResp] = useState(false)
    const [provider, setProvider] = useState([])

    function providerList() {
        fetch('https://localhost:5001/providers/list', {
          method: 'GET'
        })
        .then(resp => resp.json())
        .then(data => {
          setProvider(data)
        })
    }

    const deleteProvider = useCallback((id) => {
        fetch(`https://localhost:5001/providers/exclude/${id}`, { method: 'DELETE' })
            .then(resp => resp.json)
            .then((data) => {
                setResp(!resp)
                setMessage('Success deleted provider!')
                setType('sucess')
            })
    }, [resp])

    useEffect(() =>{
        providerList();
    }, [deleteProvider])

    function details(id) {
        window.location.href=`providers/details/${id}`
    }


    return(
        <>

           {message && <Message type={type} msg={message}/>}

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
                                                <button onClick={() => deleteProvider(providers.id)}><TiDeleteOutline /></button></span>
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
        </>
    )
}

export default Table