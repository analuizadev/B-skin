import styles from './Table.module.css';

import {RxPencil1} from 'react-icons/rx';
import {TiDeleteOutline} from 'react-icons/ti';

import EditModal from './EditModal';
import ProviderDetails from '../pages/ProviderDetails';
import { BsWindowSidebar } from 'react-icons/bs';

/*const Row = ({ providers }) => {

    const datas = Object.keys(providers)
    return(
        <tr key={providers.id}>
            {
                datas.map( data => <td data={data}>{providers[data]}</td> )
            }
        </tr>
    )
}*/


function Table({ prov }){

    function details() {
        window.location.href='/details/:id'
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
                                        <tr onClick={details} key={providers.id}>
                                            <td>{providers.name}</td>
                                            <td>{providers.document}</td>
                                            {providers.isActive === true ? (
                                                <td className={styles.on}></td>
                                            ) : <td className={styles.off}></td>}
                                            <td>
                                            <button><RxPencil1 /></button> <span><button><TiDeleteOutline /></button></span>
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

            <EditModal />
        </>
    )
}

export default Table