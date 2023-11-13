import { Component } from "react";


class Users extends Component {

    render() {
      return (
        <div>
            <p> Chanteur: {this.props.name} <br /> Age : {this.props.age} ans </p>
        </div>
    )  
    }
}

export default Users;