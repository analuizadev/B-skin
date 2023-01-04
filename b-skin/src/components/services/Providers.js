import Table from 'react-bootstrap/Table';

import styles from './Providers.module.css';

function Providers() {
  return (
    <div className={styles.body}>
        <div className={styles.table}> 
            <h1>Providers</h1>
            <Table className={styles.table_container}>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Active</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>

                    <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>

                    <tr>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>

                </tbody>
            </Table>
        </div>
    </div>
  )
}

export default Providers;