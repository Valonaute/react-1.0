import React from "react";
import { Component } from "react";
import { useState } from "react";
import Bikes from "./Bikes";
import Wrapper from "./wrapper";

class Mybikes extends Component {

    render() {
        return (
            <div>
                    <Bikes couleur="rouge" marque="Giant">
                    </Bikes>  

                    <Bikes couleur="bleu" marque="Trek">

                    </Bikes>  

                    <Bikes couleur="Vert" marque="Bianchi">
                    </Bikes>  
            </div>
        )
    }
}
export default Mybikes;