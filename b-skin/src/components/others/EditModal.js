import styles from './EditModal.module.css';

import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EditModal({ setOpenModal }){

  const [updateProvider, setUpdateProvider] = useState([])

  function providerDetailsUpdate(id){
    fetch(`https://localhost:5001/providers/update/${id}`,{
      method: 'PUT'
    }).then((resp) => resp.json)
    .then((data) => {
      setUpdateProvider(data)
      console.log(data)
    })
  }

  useEffect(() => {
    providerDetailsUpdate()
  }, [])

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width: '50%',
      height: '85%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


    return(
      <>
         <Modal appElement={document.getElementById('root')} style={customStyles} isOpen={setOpenModal} onRequestClose={false}>
          <div className={styles.modal}>
            <div className={styles.modal_content}>
              <header>
                <h2>Edit Provider</h2>
                <span onClick={() => {setOpenModal(false)}} className={styles.modal_close}>&#10006;</span>
              </header>

              <form className={styles.modal_form}>
            {

              updateProvider.map((provider) =>{
                return(
                  <>
                    <input id="name" type="text" placeholder="NAME" className={styles.modal_field}>
                      {provider.name}
                    </input>
                    <input id="email" type="text" placeholder="EMAIL" className={styles.modal_field}>
                      {provider.email}
                    </input>
                    <input id="document" type="text" placeholder="DOCUMENT" className={styles.modal_field}>
                      {provider.document}
                    </input>
                    <input id="phone" type="text" placeholder="PHONE" className={styles.modal_field}>
                      {provider.phone}
                    </input>
                    <textarea id="description" type="text" placeholder="DESCRIPTION" className={styles.modal_field}>
                      {provider.description}
                    </textarea>
                  </>
                )
              })

            }

            

                  <div className={styles.div_active}>
                    <label className={styles.active_form}>on
                      <input type="radio" name="active" id="on" value="on-active"
                        className={styles.modal_active}></input>
                      <span className={styles.checkmark}></span>
                    </label>

                    <label className={styles.active_form}>off
                      <input type="radio" name="active" id="off" value="off-active"
                        className={styles.modal_active}></input>
                      <span className={styles.checkmark}></span>
                    </label>
                  </div>
                
              </form>

              <footer>
                <button id="save">Save</button>
                <button onClick={() => {setOpenModal(false)}} id="cancel">Cancel</button>
              </footer>
            </div>
          </div>
        </Modal>
      </>
    )
}

export default EditModal