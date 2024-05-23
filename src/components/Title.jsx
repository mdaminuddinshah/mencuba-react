// we export data using variable to App file

const Title = () => {

    const name = "amin";
    const role = "engineer";

    return(
        <div style={{
            border: "1px solid black",
            borderRadius: "5px",
            padding: "10px"
        }}>
            {/* outer curly bracket is for telling react you embedded javascript  */}
            {/* inner curly bracket is for telling react you create object literal contains css properties */}
            <p>{name}</p>
            <p>{role}</p>
        </div>
    )
}

export default Title;