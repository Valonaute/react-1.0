import React from "react";

const Bikes = ({marque, couleur}) => {

    if(marque){
    return (
    <div style={ {backgroundColor: 'grey', width: '500px', padding: '10px', margin: "20px auto"}}>
        <p>Marque : {marque} </p>
        <p>Couleur : {couleur} </p>
    </div>
    )
} else {
    return <p> Pas de Data ! </p>
}
}
export default Bikes;
