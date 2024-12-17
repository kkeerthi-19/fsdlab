import React,{useState} from "react";
import './App.css';

function App(){
    const[input, setInput]=useState('');
    const[output,setOutput]=useState('');

    const handleClick=(value)=>{
        setInput=(input+value);
    };
    
    const handleCalculate=()=>{
        try{
            setOutput(eval(input));
        }
        catch{
            setOutput('Error');
        }
    };

    const handleClear=()=>{
        setInput=('');
        setOutput=('');
    };

    const handleBackspace=()=>{
        setInput(input.slice(0,-1));
    };

    return(
        <div className="Calculator">
            <div className="display">
                <div className="input">{input}</div>
                <div className="output">{output}</div>
            </div>
            <div className="buttons">
                <button onClick={()=>handleClick('1')}>1</button>
                <button onClick={()=>handleClick('2')}>2</button>
                <button onClick={()=>handleClick('3')}>3</button>
                <button onClick={()=>handleClick('+')}>+</button>

                <button onClick={()=>handleClick('4')}>4</button>
                <button onClick={()=>handleClick('5')}>5</button>
                <button onClick={()=>handleClick('6')}>6</button>
                <button onClick={()=>handleClick('-')}>-</button>

                <button onClick={()=>handleClick('7')}>7</button>
                <button onClick={()=>handleClick('8')}>8</button>
                <button onClick={()=>handleClick('9')}>9</button>
                <button onClick={()=>handleClick('*')}>*</button>

                <button onClick={()=>handleClick('0')}>0</button>
                <button onClick={handleClear}>C</button>
                <button onClick={handleBackspace}>Bc</button>
                <button onClick={()=>handleClick('/')}>/</button>

                <button onClick={handleCalculate} className="equal">=</button>
            </div>
        </div>
    );
}

export default App;