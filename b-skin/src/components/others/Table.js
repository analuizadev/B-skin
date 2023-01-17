import styles from './Table.module.css';

import {RxPencil1} from 'react-icons/rx';
import {TiDeleteOutline} from 'react-icons/ti';

import EditModal from './EditModal';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


function Table({ prov }){

    const [modalOpen, setModalOpen] = useState(false);

    function details(id) {
        window.location.href=`providers/details/${id}`
    }

    const [provider, setProvider] = useState([])

    function removeProvider(id) {
        
        fetch(`https://localhost:5001/providers/details/${id}` ,{
            method:'DELETE',
        }).then((resp) => resp.json())
        .then((data) => {
            setProvider(provider.filter((provi) => provi.id !== id))
            alert('removido com sucesso')
        })
        .catch((err) => console.log(err))
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
                                <th>Document</th>
                                <th>Active</th>
                                <th></th>
                            </tr>
                        </div>
                    </thead>

                        <tbody>
                        <div id="providers" className={styles.scroll}>
                            {
                                prov.map(providers => {

                                    return(
                                        <tr key={providers.id}>
                                            <td className={styles.name} onClick={() => details(providers.id)}>{providers.name}</td>
                                            <td>{providers.document}</td>
                                            {providers.isActive === true ? (
                                                <td className={styles.on}></td>
                                            ) : <td className={styles.off}></td>}
                                            <td>
                                            <button onClick={() => setModalOpen(true)} ><RxPencil1 /></button> <span>
                                                <button onClick={removeProvider}><TiDeleteOutline /></button></span>
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

            {modalOpen && <EditModal setOpenModal={setModalOpen}/>}
        </>
    )
}

export default Table