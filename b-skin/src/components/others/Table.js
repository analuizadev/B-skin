import styles from './Table.module.css';

import {RxPencil1} from 'react-icons/rx';
import {TiDeleteOutline} from 'react-icons/ti';

import EditModal from './EditModal';
import { useState, useEffect } from 'react';
import { Popover } from 'bootstrap';

function Table(){

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
                            <th>Created</th>
                            <th>Active</th>
                            <th></th>
                        </tr>
                        </div>
                    </thead>

                        <tbody>
                        <div id="providers" className={styles.scroll}>
            
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