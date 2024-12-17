import React,{useState} from "react";
const App=()=>{
    const[count, setCount]=useState(0)
    const[submittedCount, setSubmittedCount]=useState(null)

    const handleIncrement=()=>{
        setCount=(count+1)
    };

    const handleDecrement=()=>{
        setCount=(count-1)
    };

    const handlesubmit=()=>{
        setSubmittedCount(count)
    };

    return(
        <div style={{padding:'20px'}}>
            <h1>Voting System</h1>
            <div>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
            <h2>Current Count:{count}</h2>
            <button onClick={handlesubmit}>Submit</button>
            {submittedCount!=null && (
                <h2>Total votes submitted:{submittedCount}</h2>
            )}
        </div>
    );
};
export default App;