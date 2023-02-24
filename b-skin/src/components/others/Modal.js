import styles from './Modal.css';

function Modal({ openModal, idProv }){

  const deleteProvider = (id) => {

      fetch(`https://localhost:5001/providers/exclude/${id}`, { method: 'DELETE' })
          .then(resp => resp.json)
          .then((data) => {
              openModal(false)
          })
          
  }

    return(
      <>

        <div class="modal-background">
          <div class="modal-container">
            <header>
              <h2>Delete Provider</h2>
              <button onClick={() => openModal(false)}>x</button>
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