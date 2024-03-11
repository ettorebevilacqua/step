import { useEffect, useState } from "react"

const storeCount = localStorage.getItem('storeCount') || 0
console.log(' effect A code', storeCount)

const Effect = () => {
    const [count, setCount] = useState(Number(storeCount));
    const handleCount = (newCount)=>{
        localStorage.setItem('storeCount', newCount);
        console.log(`effect A old count ${count} new ${newCount}`)
        setCount(newCount)
    }
    useEffect (()=>{
        console.log(`useeffect A count ${count}`)
    },[])

    return (
        <div>
            <h3>Effect A - Count {count}</h3>
            <button onClick={() => handleCount(count + 1)}><h3>+</h3></button>
            <button onClick={() => handleCount(count - 1)}><h3>-</h3></button>
            <button onClick={() => handleCount(0)}><h3>Reset</h3></button>
        </div>
    )
};

export default Effect
