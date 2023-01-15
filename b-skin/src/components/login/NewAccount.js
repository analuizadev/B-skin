import styles from './NewAccount.module.css';

function NewAccount() {
    return(
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>Create new account </h2>
                </div>
                <div className={styles.form}>
                    <input id="name" name="name" type="text" placeholder='Personal name' />
                    <input type="email" placeholder='Email'/>
                    <input type="tel" placeholder='Phone'/>
                    <input type="password" placeholder='Password'/>
                    <input type="date" placeholder="dd/mm/aa" />
                </div>

                <footer>
                    <button>Sign up</button>
                </footer>
            </div>
        </>
    )
}

export default NewAccount