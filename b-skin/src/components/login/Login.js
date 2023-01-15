import styles from './Login.module.css';

import Modal from 'react-modal';

function Login({ setOpenLogin }){

    function newAccount(){
        window.location.href = '/newaccount'
    }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          width: '50%',
          height: '50%',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

    return(
        <>
            <Modal style={customStyles} isOpen={()=>{setOpenLogin(true)}} onRequestClose={setOpenLogin}>
                <div className={styles.modal_container}>
                    <header>
                        <h2>Login</h2>
                        <button onClick={() => {setOpenLogin(false)}}>&#10006;</button>
                    </header>
                    <form>
                        <input type="email" placeholder="Email"></input>
                        <input type="password" placeholder="Password"></input>
                        <a href='/'>Forgot password?</a>
                    </form>
                    <footer>
                        <button onClick={newAccount}>New account</button>
                        <button>Log In</button>
                    </footer>
                </div>
            </Modal>
        </>
    )
}

export default Login