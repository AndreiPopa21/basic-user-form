import React, { Component } from 'react'
import '../styles/PersonalDetails.css'
import { throwStatement, thisTypeAnnotation } from '@babel/types';

class PersonalDetails extends Component {

    state={
        city: this.props.value.city,
        occupation: this.props.value.occupation,
        bio: this.props.value.bio
    }

    onChangeCity = (event) => {
        event.preventDefault()
        const city = event.target.value
        this.setState({
            city: city
        })
    }

    onChangeOccupation = (event) => {
        event.preventDefault()
        const occupation = event.target.value
        this.setState({
            occupation: occupation
        })
    }

    onChangeBio = (event) => {
        event.preventDefault()
        const bio = event.target.value
        this.setState({
            bio: bio
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const data = {city: this.state.city, occupation: this.state.occupation, bio: this.state.bio}
        this.props.actions.personalDetails(data)
    }

    render() {
        return (
            <div className="PersonalDetails">
               <div className="form-header">
                    <div className="form-header-description">
                        <p className="form-register-now">Register Now</p>
                        <p className="form-register-fill">Fill up the personal details</p>
                    </div>
                    <div className="image-svg">
                        <svg className="svg-image" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="white"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>
                    </div>     
                </div>
                <form className="form-container">
                    <label>
                        <p className="form-text">Enter your city name:</p>
                        <input type="text" spellCheck="false" value={this.state.city} onChange={this.onChangeCity}/>
                    </label>
                    <label>
                        <p className="form-text">Enter your occupation:</p>
                        <input type="text" spellCheck="false" value={this.state.occupation} onChange={this.onChangeOccupation}/>
                    </label>
                    <label>
                        <p className="form-text">Enter your bio:</p>
                        <textarea rows="5" value={this.state.bio} onChange={this.onChangeBio}></textarea>
                    </label>
                    <label>
                        <input type="submit" value="Continue" onClick={this.handleSubmit}/>
                    </label>
                    <label>
                        <input type="button" value="Back" onClick={this.props.previous}/>
                    </label>
                </form>  
            </div>
        )
    }
}

export default PersonalDetails
