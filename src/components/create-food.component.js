import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class CreateFood extends Component{

    constructor(props){
        super(props);

        this.state = {
            username: '',
            description: '',
            timeToCook: 0,
            ingrediants: [],
            amount: [],
            unit: [],
            date: new Date(),
            users: []
        }
    }

    onChangeUserName(e){
        this.setState({
            username: e.target.value
        });
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });
    }
    onChangeTimeToCook(e){
        this.setState({
            timeToCook: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const food = {
            username: this.state.username,
            description: this.state.description,
            timeToCook: this.state.timeToCook,
            ingrediants: this.state.ingrediants,
            amount: this.state.amount,
            unit: this.state.unit,
            date: this.state.date,
        }

        console.log(food);

        window.location = "/";
    }
    
    render(){
        return(<div>in create food</div>);
    }
}

//TODO: when displaying food you can make a table