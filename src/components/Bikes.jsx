import React from "react";
import Wrapper from "./wrapper";
const Bikes = (props) => {

    let {couleur, marque} = props;
    return (
        <Wrapper>
            <p> Couleur : {couleur}</p>
            <p> Marque : {marque}</p>
        </Wrapper>
    )
}
export default Bikes;
