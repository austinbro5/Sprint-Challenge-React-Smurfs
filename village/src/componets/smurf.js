import react from 'react';
const smurf = props=>{
    return(
        <div classname="smurf">
            <h3>{props.name}</h3>
            <strong>{props.height}tall</strong>
            <p>{props.age} smurf years old</p>
        </div>
    );

};

 smurf.defaultprops={
     name:'',
     height:'',
     age:'',

 };

 export default smurf;