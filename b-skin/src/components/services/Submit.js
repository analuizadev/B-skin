import styles from './Submit.css'

function Submit({ text }){
    return(
        <>
            <div class="submit">
                <button class="submit-btn">{text}</button> 
            </div>
        </>
    )
}

export default Submit