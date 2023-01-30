import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import styles from  './EditProvide.css';

function EditProvide(){

    const [providerDetails, setProviderDetails] = useState([])
    const [active, setActive] = useState()

    const param = useParams()

    function editProvider(){
        setTimeout(() =>{
            fetch(`https://localhost:5001/providers/details/${param.id}`, {
            method: 'GET'
            }).then((resp) => resp.json())
            .then((data) =>{
                setProviderDetails(data)
                setActive(data.isActive)
                console.log(data)
            })
        })
    }

    useEffect(() => {
        editProvider()
    }, [param])

    function cancel(){
        window.location.href='/providers'
    }

    function setProviderActive(){
        setActive(!active)
        console.log(active)
    }

    return(
        <>
            {providerDetails ? (
                <div id="body">
                    <div class="edit-body">
                        <header>
                            <h2>Edit Provider</h2>
                        </header>

                        <form>
                                <input id="name" value={providerDetails.name} type="text" placeholder="NAME" />
                                <input id="email" value={providerDetails.email} type="text" placeholder="EMAIL" />
                                <input id="document" value={providerDetails.document} type="text" placeholder="DOCUMENT" />
                                <input id="phone" value={providerDetails.phone} type="text" placeholder="PHONE" />
                                <input id="country" value={providerDetails.country} type="text" placeholder="NAME" />
                                <textarea id="description" value={providerDetails.description} type="text" placeholder="DESCRIPTION" />
                        

                            <div class="div-active">
                                <label class="active-form">on
                                    <input class="active-modal" type="radio" name="active" id="on" value="on" onChange={() => setProviderActive()} checked={active}>
                                    </input>
                                    <span class="checkmark"></span>
                                </label>

                                <label class="active-form">off
                                    <input class="active-modal" type="radio" name="active" id="off" value="off" onChange={() => setProviderActive()} checked={!active}></input>
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            
                        </form>

                        <footer>
                            <button id="save">Save</button>
                            <button id="cancel" onClick={cancel}>Cancel</button>
                        </footer>
                    </div>
                </div>
            ): (
                <p>Invalid provider</p>
            )}
        </>
    )
}

export default EditProvide