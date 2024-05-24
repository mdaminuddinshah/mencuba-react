import { useState } from "react";
import State from "./useState.jsx";
import "./Count.css";

const Count = () => {

    const [counter, setCounter] = useState(0);
    const [nilai, tambahNilai] = useState(0);

  return (
    <div className="font">
        Count: {counter}
        <button onClick={() => setCounter((before) => before +1 )}>Increase</button>
    
        <State 
            display={nilai}
            counter={tambahNilai}
        />
    </div>
  )
}

export default Count