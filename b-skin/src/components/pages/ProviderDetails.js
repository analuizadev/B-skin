import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from './Details.module.css';

import logo from '../img/logo.png';

function ProviderDetails (){

    const id = useParams()

    const [providerDetails, setProviderDetails ] = useState([])

    useEffect(() =>{
        fetch(`https://localhost:5001/providers/details/3`, {
            method: 'GET'
        }).then((resp) => resp.json())
        .then((data) =>{
            setProviderDetails(data)
            console.log(data)
        })
    }, [id])

    return(
        <>
            {providerDetails.name ? (
                <div className={styles.body}>
                    <h2>{providerDetails.name}</h2>
                    <div className={styles.details}>
                        <p><span>Id:</span> {providerDetails.id}</p>
                        <p><span>Document:</span> {providerDetails.document}</p>
                        <p><span>Description:</span> {providerDetails.description}</p>
                        <p><span>Active:</span> {providerDetails.isActive === true ? (
                            <p className={styles.on}></p>
                        ) : (
                            <p className={styles.off}></p>
                        )}</p>
                    </div>
                    <div className={styles.logo}>
                        <img src={logo} />
                    </div>
                </div>
            ) : (
                <p>Invalid provider</p>
            )}
        </>
    )
}

export default ProviderDetails