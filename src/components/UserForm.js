import React, { Component } from 'react'
import PersonalDetails from './PersonalDetails'
import UserDetails from './UserDetails'
import ConfirmDetails from './ConfirmDetails'

class UserForm extends Component {

    state={
        step: 1,
        firstName: "",
        secondName: "",
        email: "",
        city: "",
        occupation: "",
        bio: ""
    }

    
    nextStep = (event) =>{
        event.preventDefault();
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
    }
    
    prevStep = (event) =>{
        event.preventDefault();
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    }

    onSubmitUserDetails = (data) => {
        const {firstName,secondName,email} = data;
        const {step} = this.state
        this.setState({
            firstName: firstName,
            secondName: secondName,
            email: email,
            step: step + 1
        }) 
    }

    onSubmitPersonalDetails = (data) => {
        const {city,occupation,bio} = data;
        const {step} = this.state
        this.setState({
            city: city,
            occupation: occupation,
            bio: bio,
            step: step + 1
        }) 
    }

    render() {

        const {step} = this.state;
        const {firstName,secondName,email,city,occupation,bio} = this.state;
        const value = {firstName,secondName,email,city,occupation,bio};
        const actions = {userDetails: this.onSubmitUserDetails, personalDetails: this.onSubmitPersonalDetails};
        switch(step){
            case 1:
                return(
                    <div>
                        <UserDetails following={this.nextStep} value={value} actions={actions}/>
                    </div>
                );
            case 2:
                return(
                    <div>
                        <PersonalDetails  previous={this.prevStep} following={this.nextStep} actions={actions} value={value}/>
                    </div>
                );
            case 3:
                return(
                    <div>
                        <ConfirmDetails  previous={this.prevStep} following={this.nextStep} value={value}/>
                    </div>
                );
        }
    }
}

export default UserForm
