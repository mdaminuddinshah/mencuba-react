import { useState } from "react";
import State from "./useState.jsx";

const Count = () => {

    const [counter, setCounter] = useState(0);
    const [nilai, tambahNilai] = useState(0);

  return (
    <div>
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