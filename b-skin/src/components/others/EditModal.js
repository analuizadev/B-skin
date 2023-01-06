import styles from './EditModal.module.css';

function EditModal(){

    return(
        <div className={styles.modal}>
        <div className={styles.modal_content}>
          <header>
            <p>Edit Provider</p>
            <span className={styles.modal_close}>&#10006;</span>
          </header>

          <form className={styles.modal_form}>
            <input id="name" type="text" className={styles.modal_field} />
            <textarea id="description" type="text" className={styles.modal_field} />
            <input id="document" type="text" className={styles.modal_field} />
            
            <div>
              <label for="on" className={styles.container}>on
                <input id="on" name="active" type="radio" value="on" className={styles.modal_active} />
                <span className={styles.checkmark}></span>
              </label>
              <label for="off" className={styles.container}>off
                <input id="off" name="active" type="radio" value="off" className={styles.modal_active} />
                <span className={styles.checkmark}></span>
              </label>
            </div>
          </form>

          <footer>
            <button id="save">Save</button>
            <button id="cancel">Cancel</button>
          </footer>
        </div>
      </div>
    )
}

export default EditModal