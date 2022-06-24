import React from "react";
import { v4 as uuid } from 'uuid';

const unique_id = uuid();


export class Experience extends React.Component {
    constructor() {
        super();

        this.state = {
            company: "",
            title: "",
            start: "",
            end: "",
            location: "",
            description: "",
            experience: [
                {
                    id: unique_id,
                    company: "This Company",
                    title: "Manager",
                    start: "2020",
                    end: "2022",
                    location: "Example City, PA",
                    description: "This is supposed to be a summary of your job experience"
                },
                {
                    id: unique_id,
                    company: "That Company",
                    title: "Junior Web Dev",
                    start: "2018",
                    end: "2020",
                    location: "Example City, PA",
                    description: "This is supposed to be a summary of your job experience"
                }
            ],
            edit: false
        }
    }
    
    companyChange = e => {
        this.setState({
            company: e.target.value
        })
    }

    titleChange = e => {
        this.setState({
            title: e.target.value
        })
    }

    startChange = e => {
        this.setState({
            start: e.target.value
        })
    }

    endChange = e => {
        this.setState({
            end: e.target.value
        })
    }

    locationChange = e => {
        this.setState({
            location: e.target.value
        })
    }

    descriptionChange = e => {
        this.setState({
            description: e.target.value
        })
    }

    submitNewExperience = e => {
        e.preventDefault();
        this.setState({
            experience: this.state.experience.concat({
                id: unique_id,
                company: this.state.company,
                title: this.state.title,
                start: this.state.start,
                end: this.state.end,
                location: this.state.location,
                description: this.state.description
            }),
            company: "",
            title: "",
            date: this.state.start + '-' + this.state.end,
            location: this.state.location,
            description: this.state.description
        })

        this.toggleEdit()
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    removeExperience = key => {
        const newExperience = this.state.experience.filter(experience => experience.id !== key)

        this.setState({
            experience: newExperience
        })
    }
    
    render() {
        const { company, title, start, end, location, description, experience, edit } = this.state;
        return (
            <div id="Experience">
                <h2>Experience</h2>
                {experience.map(experience => {
                    return (
                        <div key={experience.id} onClick={() => this.removeExperience(experience.id)}>
                            <div>
                                <p className="experience-date">{ experience.date }</p>
                                <p className="experience-title">{ experience.title }</p>
                            </div>
                            <div>
                                <p className="experience-company">{ experience.company }</p>
                                <p className="experience-location">{ experience.location }</p>
                                <p className="experience-description">{ experience.description }</p>
                            </div>
                        </div>
                    )
                })}
                <button
                    className="edit-toggle"
                    type="button"
                    onClick={this.toggleEdit}
                >
                    Add
                </button>

                {edit &&
                    <form id="experience-add" className="edit-form">
                        <label htmlFor="company">Company:</label>
                        <input
                            id="company"
                            type="text"
                            value={company}
                            onChange={this.companyChange}
                        />
                        <label htmlFor="title">Title:</label>
                        <input
                            id="title"
                            type="text"
                            value={title}
                            onChange={this.titleChange}
                        />
                        <label htmlFor="start">Start Date:</label>
                        <input
                            id="start"
                            type="text"
                            value={start}
                            onChange={this.startChange}
                        />
                        <label htmlFor="end">End Date:</label>
                        <input
                            id="end"
                            type="text"
                            value={end}
                            onChange={this.endChange}
                        />
                        <label htmlFor="location">Location:</label>
                        <input
                            id="location"
                            type="text"
                            value={location}
                            onChange={this.locationChange}
                        />
                        <label htmlFor="description">Description:</label>
                        <input
                            id="description"
                            type="text"
                            value={description}
                            onChange={this.descriptionChange}
                        />
                        <button
                            type="button"
                            onClick={this.submitNewExperience}
                        >
                            Add Experience
                        </button>
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