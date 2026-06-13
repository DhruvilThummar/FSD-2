import 'App' from './Appointment.jsx'

function Hospital(){
    const Patient={
        name:"ABC",
        Dr_name:"D R Thummar"
    }
    return(
        <div>
            <App details={Patient}></App>
        </div>
    );
};

export default Hospital;