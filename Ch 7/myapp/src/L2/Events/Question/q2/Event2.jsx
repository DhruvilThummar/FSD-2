function Event2(){
    function handelChange(e){
        console.log(e.target.value)
    };
    return(
        <>
            <input type="text" onChange={handelChange} />
        </>
    );
};

export default Event2;