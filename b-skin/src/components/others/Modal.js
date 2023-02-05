import styles from './Modal.css';
import { useState, useEffect, useCallback } from 'react';

import Message from '../services/Message';

function Modal({ openModal, idProv }){

    const [type, setType] = useState()
    const [message, setMessage] = useState('')
    const [resp, setResp] = useState(false)
    const [provider, setProvider] = useState([])

  const deleteProvider = useCallback((id) => {

      fetch(`https://localhost:5001/providers/exclude/${id}`, { method: 'DELETE' })
          .then(resp => resp.json)
          .then((data) => {
              openModal(false)
              setMessage('Success deleted provider!')
              setType('sucess')
          })
  }, [])

    return(
      <>

        <div class="modal-background">
          <div class="modal-container">
            <header>
              <h2>Delete Provider</h2>
              <button onClick={() => openModal(false)}> x </button>
            </header>
            <section class="body">
              <p>Are you sure you want to delete the provider?</p>
            </section>
            <footer class="footer">
              <button onClick={() => deleteProvider(idProv)}>Delete</button>
              <button onClick={() => openModal(false)}>Cancel</button>
            </footer>
          </div>
        </div>
      </>
    )
}

export default Modal