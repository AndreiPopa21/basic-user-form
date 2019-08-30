import React, { Component } from 'react'
import '../styles/ConfirmDetails.css'
import confirmedImage from '../confirmed-signed.png'
class ConfirmDetails extends Component {

    state={
        confirmed: "false"
    };

    confirmData = () => {
        const {confirmed} = this.state
        this.setState({ 
            confirmed: !confirmed
        })
    }

    render() {

        if(!this.state.confirmed){
            return(
                <div className="confirmed-data-container">
                    <img className="confirm-image" src={confirmedImage} alt="confirm"/>
                    <p className="congratulations-text">Congratulations!</p>
                </div>
            )
        }

        return (
            <div className="ConfirmDetails">
                <div className="form-header">
                    <div className="form-header-description">
                        <p className="form-register-now">Register Now</p>
                        <p className="form-register-fill">Please confirm your details</p>
                    </div>
                    <div className="image-svg">
                        <svg className="svg-image" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="white"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>
                    </div>     
                </div>
                <div className="details-container">
                    <div className="singleline-detail-container">
                        <p className="details-label">First Name:</p>
                        <p className="singleline-detail">{this.props.value.firstName}</p>
                    </div>
                    <div className="singleline-detail-container">
                        <p className="details-label">Second Name:</p>
                        <p className="singleline-detail">{this.props.value.secondName}</p>
                    </div>
                    <div className="singleline-detail-container">
                        <p className="details-label">Email:</p>
                        <p className="singleline-detail">{this.props.value.email}</p>
                    </div>
                    <div className="singleline-detail-container">
                        <p className="details-label">City Name:</p>
                        <p className="singleline-detail">{this.props.value.city}</p>
                    </div>
                    <div className="singleline-detail-container">
                        <p className="details-label">Occupation:</p>
                        <p className="singleline-detail">{this.props.value.occupation}</p>
                    </div>
                    <div className="bio-container">
                        <p className="multiline-detail">{this.props.value.bio}</p>
                    </div>
                </div>
                <form className="controls-container">
                    <input type="submit" value="Confirm" onClick={this.confirmData}/>
                    <input type="button" value="Back" onClick={this.props.previous} />
                </form>
            </div>
        )
    }
}

export default ConfirmDetails