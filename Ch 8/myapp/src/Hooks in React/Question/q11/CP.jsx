import {createContext} from 'react';
import CP1 from './CP1.jsx';

const Num1=createContext();
const Num2=createContext();

function CP(){
    return(
        <>
            <Num1.Provider value={10}>
            <Num2.Provider value={15}>
            <CP1/>
            </Num2.Provider> 
            </Num1.Provider>
        </>
    );
};

export default CP;
export {Num1,Num2};