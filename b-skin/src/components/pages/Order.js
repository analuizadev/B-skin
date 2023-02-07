import Modal from 'react-modal';
import styles from './Order.css';
import Bag from '../img/bag.png';
import { Link } from 'react-router-dom';

function Order({ setOpenModal }){

    const customStyles = {
        content:{
            top: 0,
            width: "450px",
            height: "100%",
            left: "74%",
        }
    }

    return(
        <>
            <Modal appElement={document.getElementById('root')} style={customStyles} isOpen={setOpenModal} onRequestClose={false}>
                <div class="body">
                    <header>
                        <button onClick={() => {setOpenModal(false)}}>x</button>
                        <h2>Bag</h2>
                    </header>
                    <div class="container">
                        <h2><img src={Bag}></img></h2>
                        <p>There are no items in your bag!</p>
                        <div>
                            <button class="shop"><Link to='/shirt'>shop</Link></button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Order