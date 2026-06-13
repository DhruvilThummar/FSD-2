import {useContext} from 'react';
import{Num1,Num2} from './CP.jsx';

function CP3() {
    const n1=useContext(Num1);
    const n2=useContext(Num2);
    return(
        <h1>
            Ans: {n1*n2}
        </h1>
    );
};

export default CP3;