import React, { Component } from "react";

class Person extends Component {



    constructor(props) {
        // const arr = [                  // testing out map()
        //     {
        //         test: 'test'
        //     }
        // ];
        // arr.map((value) => {
        //     console.log(value)
        // });             
        super(props)
        this.state = {
            person: [
                {
                    name: 'Zell Myles',
                    birthDate: 'Born: May 29th',
                    number: 'Phone Number: 123-456-7890',
                    address: '123 Red Ventures Drive'
                },
                {
                    name: 'Derrick Rose',
                    birthDate: 'Born: October 4th',
                    number: 'Phone Number: 123-456-7890',
                    address: '123 Paulina ST'
                },
                {
                    name: 'Josuke Higashikata',
                    birthDate: 'Born: June 24th',
                    number: 'Phone Number: 123-456-7890',
                    address: '123 Morioh Drive'
                }
            ]
        }
    }


    render() {
        return <div className="Person">

            {this.state.person.map(person => {
                return <React.Fragment><p>{person.name}</p>
                    <p>{person.birthDate}</p>
                    <p>{person.number}</p>
                    <p>{person.address}</p>
                </React.Fragment>
            })}
        </div>

    }


}


export default Person;