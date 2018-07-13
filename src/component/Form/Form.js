import React, { Component } from 'react'

export default class Form extends Component {
    constructor(){
        super()

        this.state = {

            addTo: [],
            cancel: ''

        }
    }


    render(){
        return(
            <div>
                <input className="inputLine"></input>
                <input className="inputLine"></input>
                <input className="inputLine"></input>
                <button className="cancelButton">Cancel</button>
                <button className="addToInventory">Add to Inventory</button>
            </div>
        )

        
    }
}

