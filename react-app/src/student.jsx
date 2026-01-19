

function Student(props) {
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Is Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}
Student.defaultProps ={
    name: "guest",
    age: 0,
    isStudent: false
}

export default Student