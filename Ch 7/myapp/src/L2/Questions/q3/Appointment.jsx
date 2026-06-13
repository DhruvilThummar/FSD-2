function App(props){
    
    function conformbooking(e){
        e.preventdefault();
        alert("Appoint booked for"+props.details.name)
    }

    return(
        <div>
            <h2>Patient Name: {props.details.name}</h2>
            <h2>Dr Name: {props.details.Dr_name}</h2>
            <form onSubmit={conformbooking}>
                <button type="submit">Conform</button>
            </form>
        </div>
    );
}
export default App;