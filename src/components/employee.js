function Employee(props){
    return (

        <>
    <h3>Employee {props.name}</h3>
    <p>{props.role ? props.role:'None'}</p>
    </>
    )
}

export default Employee;