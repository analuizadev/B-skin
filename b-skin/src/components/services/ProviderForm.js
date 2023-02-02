import Input from "../others/Input";
import styles from './ProviderForm.css';
import { useState } from "react";
import Submit from "./Submit";

function ProviderForm({ providerDetails, handleSubmit, btnText }) {

    const [ info, setInfo ] = useState(providerDetails || {})

    function handleChange(e) {
        setInfo({ ...info, [e.target.name]: e.target.value})
        console.log(info)
    }

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(info)
    }

    function cancel(){
        window.location.href='/providers'
    }

    const [active, setActive] = useState([''])

    function setProviderActive(){
        setActive(!active)
        console.log(active)
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
                            <input class="active-modal" type="radio" name="active" id="on" value="on" onChange={() => setProviderActive()} checked={!active}>
                            </input>
                            <span class="checkmark"></span>
                        </label>

                        <label class="active-form">off
                            <input class="active-modal" type="radio" name="active" id="off" value="off" onChange={() => setProviderActive()} checked={active}></input>
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