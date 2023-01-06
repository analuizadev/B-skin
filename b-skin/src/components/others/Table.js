import styles from './Table.module.css';

import {RxPencil1} from 'react-icons/rx';
import {TiDeleteOutline} from 'react-icons/ti';
import {BsCircleFill} from 'react-icons/bs';

import EditModal from './EditModal';

function Table(){

    return(
        <>
            <div className={styles.table}>

            <table>
                <caption>Providers</caption>
                
                <div className={styles.radius}>
                    <thead>
                        <div className={styles.interactive}>
                        <tr>
                            <th>Name</th>
                            <th>Created</th>
                            <th>Active</th>
                            <th></th>
                        </tr>
                        </div>
                    </thead>

                        <tbody>
                        <div className={styles.scroll}>
                            <tr>
                                <td>Nike</td>
                                <td>11/02/2021</td>
                                <td className={styles.on}><BsCircleFill /></td>
                                <td><button><RxPencil1 /></button> <span><button><TiDeleteOutline /></button></span></td>
                            </tr>
                            <tr>
                                <td>Amazon</td>
                                <td>11/02/2021</td>
                                <td className={styles.off}><BsCircleFill /></td>
                                <td>botões</td>
                            </tr>
                            <tr>
                                <td>Lv</td>
                                <td>11/02/2021</td>
                                <td>on</td>
                                <td>botões</td>
                            </tr>
                            <tr>
                                <td>Farm</td>
                                <td>11/02/2021</td>
                                <td>on</td>
                                <td>botões</td>
                            </tr>
                            <tr>
                                <td>Amazon</td>
                                <td>11/02/2021</td>
                                <td>on</td>
                                <td>botões</td>
                            </tr>
                            <tr>
                                <td>Adidas</td>
                                <td>11/02/2021</td>
                                <td>on</td>
                                <td>botões</td>
                            </tr>
                            <tr>
                                <td>Amazon</td>
                                <td>11/02/2021</td>
                                <td>on</td>
                                <td>botões</td>
                            </tr>
                            <tr>
                                <td>Cantão</td>
                                <td>11/02/2021</td>
                                <td>on</td>
                                <td>botões</td>
                            </tr>
                            <tr>
                                <td>Amazon</td>
                                <td>11/02/2021</td>
                                <td>on</td>
                                <td>botões</td>
                            </tr>
                            <tr>
                                <td>Amazon</td>
                                <td>11/02/2021</td>
                                <td>on</td>
                                <td>botões</td>
                            </tr>
                            <tr>
                                <td>Amazon</td>
                                <td>11/02/2021</td>
                                <td>on</td>
                                <td>botões</td>
                            </tr>
                            <tr>
                                <td>Amazon</td>
                                <td>11/02/2021</td>
                                <td>on</td>
                                <td>botões</td>
                            </tr>
                            <tr>
                                <td>Amazon</td>
                                <td>11/02/2021</td>
                                <td>on</td>
                                <td>botões</td>
                            </tr>
                            <tr>
                                <td>Amazon</td>
                                <td>11/02/2021</td>
                                <td>on</td>
                                <td>botões</td>
                            </tr>
                            <tr>
                                <td>Amazon</td>
                                <td>11/02/2021</td>
                                <td>on</td>
                                <td>botões</td>
                            </tr>
                            <tr>
                                <td>Amazon</td>
                                <td>11/02/2021</td>
                                <td>on</td>
                                <td>botões</td>
                            </tr>
                            <tr>
                                <td>Amazon</td>
                                <td>11/02/2021</td>
                                <td>on</td>
                                <td>botões</td>
                            </tr>
                            <tr>
                                <td>Amazon</td>
                                <td>11/02/2021</td>
                                <td>on</td>
                                <td>botões</td>
                            </tr>

                            <tr>
                                <td>Amazon</td>
                                <td>11/02/2021</td>
                                <td>on</td>
                                <td>botões</td>
                            </tr>
                            <tr>
                                <td>Amazon</td>
                                <td>11/02/2021</td>
                                <td>on</td>
                                <td>botões</td>
                            </tr>
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