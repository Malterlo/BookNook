import { useEffect, useState } from "react";

const FetchAPI = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [])
    
    return (
        <div>
            <h1>Fetched Data:</h1>
            <div>
                {data.map((item) => (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p>Price: ${item.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    )
    
    
    ;}


export default FetchAPI;