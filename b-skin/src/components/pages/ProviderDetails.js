import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {BsChevronLeft} from 'react-icons/bs'

import styles from './Details.module.css';

function ProviderDetails (){

    function back(){
        window.location.href='/providers'
    }

    const param = useParams()

    const [providerDetails, setProviderDetails ] = useState([])


    useEffect(() => {

        setTimeout(() => {
            fetch(`https://localhost:5001/providers/details/${param.id}`, {
            method: 'GET'
            }).then((resp) => resp.json())
            .then((data) =>{
                setProviderDetails(data)
                console.log(data)
            })
        })


    }, [param])
        

    return(
        <>
            <button onClick={back} className={styles.back}><BsChevronLeft /></button>
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
                    </div>
                </div>
            ) : (
                <p>Invalid provider</p>
            )}
        </>
    )
}

export default ProviderDetails