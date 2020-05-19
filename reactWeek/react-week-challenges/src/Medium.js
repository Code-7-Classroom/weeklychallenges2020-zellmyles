import React, { Component } from "react";

class Person extends Component {
    constructor(props) {
        super(props)
        this.state = {
            person: {
                name: 'Zell Myles',
                birthDate: 'Born: May 29th',
                number: 'Phone Number: 123-456-7890',
                address: '123 Red Ventures Drive'
            }
        }
    }

    render() {
        return (
            <div className="Person">
                <p>{this.state.person.name}</p>
                <p>{this.state.person.birthDate}</p>
                <p>{this.state.person.number}</p>
                <p>{this.state.person.address}</p>
            </div>
        )

    }
}

export default Person;