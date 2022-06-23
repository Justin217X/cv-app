import React from "react";
// import uuid from "react-uuid";

export class Education extends React.Component {
    constructor() {
        super();
        this.state = {
            year: "",
            university: "",
            location: "",
            degree: "",
        }
    }

    yearChange = e => {
        this.setState({
            year: e.target.value
        })
    }

    universityChange = e => {
        this.setState({
            university: e.target.value
        })
    }

    locationChange = e => {
        this.setState({
            location: e.target.value
        })
    }

    degreeChange = e => {
        this.setState({
            degree: e.target.value
        })
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }    

    render() {
        const { year, university, location, degree, edit } = this.state;
        return (
            <div className="education-box">
                <h2>Education</h2>
                <h4>
                    {degree ? degree: "Master of Business Administration: Operations Management"}
                </h4>
                <p>{university ? university: "Penn State University" }  |  {location ? location: "State College, PA" }  |  {year ? year: "2022"} </p>


                <button className="edit-toggle" type="button" onClick={this.toggleEdit}>
                    Edit
                </button>
                    {edit && 
                    <form id="education-edit" className="edit-form">
                        <label htmlFor="year">Year:</label>
                        <input 
                            id="year" 
                            type="text" 
                            onChange={this.yearChange} 
                        />
                        <label htmlFor="university">University:</label>
                        <input
                            id="university"
                            type="text"
                            onChange={this.universityChange}
                        />
                        <label htmlFor="location">Location:</label>
                        <input 
                            id="location"
                            type="text"
                            onChange={this.locationChange}
                        />
                        <label htmlFor="degree">Degree:</label>
                        <input
                            id="degree"
                            type="text"
                            onChange={this.degreeChange}
                        />
                       
                        <button
                            type="button"
                            onClick={this.toggleEdit}
                        >
                            Close
                        </button>
                    </form>
                    }
            </div>
        )
    }
 }