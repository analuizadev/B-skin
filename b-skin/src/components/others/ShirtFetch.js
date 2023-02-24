import { useState } from "react";

function ShirtFetch({pageLimit}) {

    const [tshirt, setTshirt] = useState([])

    function fetchData(page) {
        const virtualPage = ((page -1) * pageLimit) <=0 ? 0 : ((page -1) * pageLimit)
        
        fetch(`https://localhost:5001/t-shirts/list`, {
            method: 'POST',
            headers:{ 'Content-Type' : 'application/json' },
            body: JSON.stringify({
                pagination:{
                    page: 1,
                    pageSize: 9,
                    ignorePagination: false
                }, 
                filters: null
            })
        })
        .then((resp) => resp.json())
        .then((data) => setTshirt(data))
    }

    return{
        fetchData,
        tshirt
    }
}

export default ShirtFetch