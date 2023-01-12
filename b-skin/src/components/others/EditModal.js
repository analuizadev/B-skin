import styles from './EditModal.module.css';

function EditModal({ setOpenModal }){

    return(
      <div className={styles.modal}>
        <div className={styles.modal_content}>
          <header>
            <p>Edit Provider</p>
            <span onClick={() => {setOpenModal(false)}} className={styles.modal_close}>&#10006;</span>
          </header>

          <form className={styles.modal_form}>
            <input id="name" type="text" placeholder="NAME" className={styles.modal_field} />
            <input id="email" type="text" placeholder="EMAIL" className={styles.modal_field} />
            <input id="document" type="text" placeholder="DOCUMENT" className={styles.modal_field} />
            <input id="phone" type="text" placeholder="PHONE" className={styles.modal_field} />
            <textarea id="description" type="text" placeholder="DESCRIPTION" className={styles.modal_field} />
            
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
    )
}

export default EditModal