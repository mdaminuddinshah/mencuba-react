import PropTypes from 'prop-types';
import {useState} from "react";

function State2(props) {

    const [counter, setCounter] = useState(0);

    return (

        <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            border: "1px solid black",
            alignItems: "center",
            borderRadius: "5px",
        }}>
            <p style={{marginLeft: "10px"}}>{props.sdt}:</p>
            <p>{counter}</p>
            <button style={{width: "80px", height: "30px", borderRadius: "12px"}} onClick={() => setCounter((before) => before + 1)}>Increase</button>
        </div>

    )
}

State2.propTypes = {
    sdt: PropTypes.string
}

export default State2
