import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ProviderForm from "../services/ProviderForm";
import styles from  './EditProvide.css';

function EditProvide(){

    const [providerDetails, setProviderDetails] = useState([])
    const [active, setActive] = useState()

    const param = useParams()

    console.log(providerDetails.id)

    function providerInfo(){
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
        providerInfo()
    }, [])

    function setProviderActive(){
        setActive(!active)
        console.log(active)
    }

    function editProvi(providerDetails) {
        fetch(`https://localhost:5001/providers/update/${providerDetails.id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(providerDetails)
        }).then((resp) => resp.json())
        .then((data) =>{
            setProviderDetails(data)
        }).catch((err) => console.log(err))

        window.location.href='/providers'
    }

    return(
        <>
            {providerDetails.name ? (
                <div id="body">
                    <div class="edit-body">
                        <header>
                            <h2>Edit Provider</h2>
                        </header>

                        <ProviderForm 
                        handleSubmit={editProvi}
                        btnText="Save"
                        providerDetails={providerDetails}/>

                    </div>
                </div>
            ): (
                <p>Invalid provider</p>
            )}
        </>
    )
}

export default EditProvide