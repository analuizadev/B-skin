import Input from "../others/Input";
import styles from './ProviderForm.css';
import { useState } from "react";
import Submit from "./Submit";

function ProviderForm({ providerDetails, handleSubmit, btnText }) {

    const [ info, setInfo ] = useState(providerDetails || {})
    const [ active, setActive ] = useState(providerDetails.isActive ? "on" : "off")
    
    function handleChange(e) {
        console.log(e.target.value);
        if(e.target.type === "radio"){
            setActive(e.target.value);

            if(e.target.value === "on"){
                setInfo({ ...info, [e.target.name]: true})
            }

            if(e.target.value === "off"){
                setInfo({ ...info, [e.target.name]: false})
            }
        }
        else{
            setInfo({ ...info, [e.target.name]: e.target.value})
        }
    }

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(info)
    }

    function cancel(){
        window.location.href='/providers'
    }
    
    return(
        <>
            <form onSubmit={submit} class="form">
                <div class="input">
                    <div class="width-input">
                        <Input
                        type="text" 
                        name="name" 
                        placeholder="Full name"
                        handleOnChange={handleChange}
                        value={info.name} />
                        
                        <Input
                        type="text" 
                        name="email" 
                        placeholder="Email"
                        handleOnChange={handleChange}
                        value={info.email} />

                        <Input
                        type="text" 
                        name="document" 
                        placeholder="Document"
                        handleOnChange={handleChange}
                        value={info.document} />

                        <Input
                        type="text" 
                        name="country" 
                        placeholder="Country" 
                        handleOnChange={handleChange}
                        value={info.country} />

                        <Input
                        type="text" 
                        name="phone" 
                        placeholder="Phone" 
                        handleOnChange={handleChange}
                        value={info.phone} />

                        <textarea placeholder="Description" handleOnChange={handleChange}
                        value={info.description} />
                    </div>
                    

                    <div class="div-active">
                        <label class="active-form">on
                            <input 
                                class="active-modal" 
                                type="radio" 
                                name="isActive" 
                                id="on" 
                                value="on" 
                                checked={active === "on"}
                                onChange={handleChange}
                            ></input>
                            <span class="checkmark"></span>
                        </label>

                        <label class="active-form">off
                            <input 
                                class="active-modal" 
                                type="radio" 
                                name="isActive" 
                                id="off" 
                                value="off" 
                                checked={active === "off"}
                                onChange={handleChange}
                            ></input>
                            <span class="checkmark"></span>
                        </label>
                    </div>

                </div>
                <div class="btnSubmit">
                    <Submit text={btnText} /> <button onClick={cancel}>Cancel</button>
                </div>
            </form>
        </>
    )
}   

export default ProviderForm