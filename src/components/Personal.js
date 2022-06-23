import React from "react";

export class Personal extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            address: "",
            phone: "",
            email: "",
            summary: "",
            edit: false
        }
    }
    nameChange = e => {
        this.setState({
            name: e.target.value
        })
    }
    addressChange = e => {
        this.setState({
            address: e.target.value
        })
    }
    phoneChange = e => {
        this.setState({
            phone: e.target.value
        })
    }
    emailChange = e => {
        this.setState({
            email: e.target.value
        })
    }
    summaryChange = e => {
        this.setState({
            summary: e.target.value
        })
    }
    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }
    render() {
        const { name, address, phone, email, summary, edit } = this.state;
        return (
            <div>
                <h1 className="personal">{name ? name : 'Your Name'}</h1>
                <h4 className="personal">
                    {address ? address: "San Franciso, CA 94122"}  |  {phone ? phone: "555-555-5555"}  |  {email ? email: "youremail@email.com"}
                </h4>
                <h2 className="summary">Summary</h2>
                <p className="content">{summary ? summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet libero sed arcu semper lobortis. Duis blandit diam eget ex porta sagittis. Vestibulum viverra augue eu lacus iaculis convallis. Cras quam libero, auctor sed magna at, semper auctor libero. Vestibulum imperdiet sem sed sem feugiat, eu fringilla quam malesuada. Integer sapien elit, aliquam eu metus eu, tincidunt tempor sem."}</p>
                    <button className="edit-toggle" type="button" onClick={this.toggleEdit}>
                    Edit
                    </button>

                    {edit && 
                    <form id="personal-edit" className="edit-form">
                        <label htmlFor="name">Your Name</label>
                        <input 
                            id="name" 
                            type="text" 
                            onChange={this.nameChange} 
                        />
                        <label htmlFor="address">Address</label>
                        <input
                            id="address"
                            type="text"
                            onChange={this.addressChange}
                        />
                        <label htmlFor="phone">Phone #</label>
                        <input 
                            id="phone"
                            type="text"
                            onChange={this.phoneChange}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="text"
                            onChange={this.emailChange}
                        />
                        <label htmlFor="summary">Summary</label>
                        <textarea 
                            id="summary"
                            onChange={this.summaryChange}
                        />
                        <button
                            type="button"
                            onClick={this.toggleEdit}
                        >
                            Close Edit
                        </button>
                    </form>
                }
            </div>
        )
    }
}