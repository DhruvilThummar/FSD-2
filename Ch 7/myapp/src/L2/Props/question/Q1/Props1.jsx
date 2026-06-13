import Prop2 from './Props2.jsx'

function Prop1(){
    var n="abc";

    return(
        <>
            <Prop2  name={n} rollno='101' marks={25} /> 
            <Prop2  name='pqr' rollno='102' marks={22} /> 
            <Prop2  name='xyz' rollno='103' marks='25' /> 
        </>
    );
};

export default Prop1;