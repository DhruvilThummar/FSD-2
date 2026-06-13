import {createContext} from 'react';
import C1 from './C1.jsx';

const Fname=createContext();
const Lname=createContext();

function PC(){
    return(
        <>
            <Fname.Provider value='ABC'>
            <Lname.Provider value='PQR'>
            <C1/>
            </Lname.Provider>
            </Fname.Provider>
        </>
    );
};

export default PC;
export {Fname,Lname};