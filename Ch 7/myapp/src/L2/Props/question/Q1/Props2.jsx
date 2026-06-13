function Prop2(props){

    return(
        <>
            <ul>
                <li>{props.name}</li>
                <li>{props.rollno}</li>
                <li>{props.marks+1}</li>
            </ul>
        </>
    );
};

export default Prop2;