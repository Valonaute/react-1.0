import { Component } from "react";
import Ois from "./Ois";
import Pap from "./Pap";

class Form extends Component {

    render() {
        return(
            <div>
                <Ois /> 
                <Pap />
                <h1> Commentaire</h1>
                formulaire 
            </div>
        )
    }

}

export default Form; 