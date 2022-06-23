import React from "react";
import { v4 as uuid } from 'uuid';

const unique_id = uuid();

export class Skills extends React.Component {
    constructor() {
        super();
        this.state = {
            skill: "",
            skills: [
                {
                id: unique_id,
                skill: "Problem Solving"
                },
                {
                id: unique_id,
                skill: "Communication"
                },
                {
                id: unique_id,
                skill: "Adaptability"
                },
                {
                id: unique_id,
                skill: "Time Management"
                },
            ],
            edit: false
        }
    }

    skillChange = e => {
        this.setState({
            skill: e.target.value
        })
    }

    submitNewSkill = e => {
        e.preventDefault();
        this.setState({
            skills: this.state.skills.concat({
                id: unique_id,
                skill: this.state.skill
            }),
            skill:''
        })

        this.toggleEdit()
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    removeSkill = key => {
        const newSkills = this.state.skills.filter(skill => skill.id !== key)

        this.setState({
            skills: newSkills
        })
    }

    render() {
        const { skill, skills, edit } = this.state;

        return (
             <div id="Skills">
                <h2>Skills</h2>
                <ul>
                    {skills.map(skill => {
                        return(
                            <li key={skill.id} onClick={() => this.removeSkill(skill.id)}>{skill.skill}</li>
                        )
                    })}
                </ul>
                <button className="edit-toggle" type="button" onClick={this.toggleEdit}>
                    Add
                </button>
                {edit && 
                <form id="skill-add" className="edit-form">
                    <label htmlFor="skill">Skill</label>
                    <input
                        id="skill"
                        type="text"
                        value={skill}
                        onChange={this.skillChange}
                    />
                    <button
                        type="button"
                        onClick={this.submitNewSkill}
                    >
                        Add Skill
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