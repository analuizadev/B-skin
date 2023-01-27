import styles from './LoginMobile.css';

function LoginMobile() {

    function newAccount(){
        window.location.href = '/newaccount'
    }

    return(
        <>
            <div class="container">
                <div class="title">
                    <h2>Login</h2>
                </div>
                <div class="form">
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                </div>

                <footer>
                    <button onClick={newAccount}>New account</button>
                    <button>Log In</button>
                </footer>
            </div>
        </>
    )
}

export default LoginMobile