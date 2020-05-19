import React, { Component } from "react";

class Person extends Component {
    constructor(props) {
        super(props)
        this.state = {
            person: {}
        }
    }
    render(){
        return <div className="Person">
            <p>Zell Myles</p>
            <p>Born: May 29th</p>
            <p>Phone Number: 123-456-7890</p>
            <p>Address: 123 Red Ventures Drive</p>
        </div>

    }

}



export default Person;