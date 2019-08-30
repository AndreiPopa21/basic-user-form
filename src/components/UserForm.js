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
                        Step 2
                    </div>
                );
            case 3:
                return(
                    <div>
                        Step 3
                    </div>
                );
        }
    }
}

export default UserForm
