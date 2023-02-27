import { useState, useEffect } from "react"

function CardHome(){

    const [shirt, setShirt] = useState([])

    useEffect(() =>{
        const fetchData = async () => {
            const result = await fetch(`https://localhost:5001/t-shirts/list`, {
                method: 'POST',
                headers:{ 'Content-Type' : 'application/json' },
                body: JSON.stringify({
                    pagination:{
                        page: 18,
                        pageSize: 2,
                        ignorePagination: false
                    }, 
                    filters: null
                })
            })
            .then((resp) => resp.json())
            .then((data) => data)

            setShirt(result)
        }
        fetchData()
    }, [])

    function shirtDetails(id){
        window.location.href=`t-shirts/details/${id}`
    }

    return(
        <>
            {shirt.map(tshirt =>{
                return(
                    <div class="card-header">
                        <img 
                        src={tshirt.imageUrl} 
                        alt={tshirt.modelDescription}/>
                        <p>{tshirt.modelName}<span>${tshirt.price}</span></p>
                        <div class="card-footer">
                            <select>
                                <option disabled>Select a option</option>
                                <option value="small" selected>XS</option>
                                <option value="small" selected>S</option>
                                <option value="medium">M</option>
                                <option value="large">L</option>
                                <option value="xlarge">XL</option>
                            </select>
                            <button onClick={() => shirtDetails(tshirt.id)}>buy</button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default CardHome