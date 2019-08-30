import React, { Component } from 'react'
import PersonalDetails from './PersonalDetails'
import UserDetails from './UserDetails'
import ConfirmDetails from './ConfirmDetails'

class UserForm extends Component {

    state={
        step: 3,
        firstName: "",
        secondName: "",
        email: "",
        city: "",
        occupation: "",
        bio: ""
    }

    
    nextStep = () =>{
        const {step} = this.state;
        console.log("Go next step");
        this.setState({
            step: step + 1
        })
    }
    
    prevStep = () =>{
        const {step} = this.state;
        console.log("Go previous step");
        this.setState({
            step: step - 1
        })
    }


    render() {

        const {step} = this.state;
        const {firstName,secondName,email,city,occupation,bio} = this.state;

        switch(step){
            case 1:
                return(
                    <div>
                        <UserDetails/>
                    </div>
                );
            case 2:
                return(
                    <div>
                        <PersonalDetails/>
                    </div>
                );
            case 3:
                return(
                    <div>
                        <ConfirmDetails/>
                    </div>
                );
        }
    }
}

export default UserForm
