const Cat = (props) => {

    props.test?.();

    return(
        <div style={{
            border: "1px solid brown",
            borderRadius: "5px",
            padding: "10px"
        }}>
            <p>{props.name}</p>
            <p>{props.role}</p>

            {/* send boolean here */}
            {/* if true right statement run, if false not run */}
            { props.isTrue && <p style={{color: "red"}}>Morning</p> }
        </div>
    )
}

export default Cat;