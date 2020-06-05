import React, { Component } from 'react';
import userInfo from '../data/userInfo.json';
import TopBar from '../components/TopBar';
import { toast } from 'react-toastify';
import { MDBCard, MDBCardBody, MDBCol, MDBBtn, MDBInput, MDBRow } from 'mdbreact';

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '', lastName: '', age: 0, nationality: '', address: '', role: '', email: '', password: '', phoneNum: 0
        }
    }
    componentDidMount() {
        let user = localStorage.getItem('authToken');
        let userData = userInfo[user];
        this.setState({ firstName: userData.firstName });
        this.setState({ lastName: userData.lastName });
        this.setState({ age: userData.age });
        this.setState({ nationality: userData.nationality });
        this.setState({ address: userData.address });
        this.setState({ role: userData.role });
        this.setState({ email: userData.email });
        this.setState({ password: userData.password });
        this.setState({ phoneNum: userData.phoneNum });
    }
    openModal = () => {
        this.setState({ openModal: !this.state.openModal })
    }
    handleInputs = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = async (e) => {
        e.preventDefault();
        e.persist();
        console.log("First Name: ", this.state.firstName);
        console.log("Last Name: ", this.state.lastName);
        console.log("Role: ", this.state.role);
        console.log("Email: ", this.state.email);
        console.log("Password: ", this.state.password);
        console.log("Phone Number: ", this.state.phoneNum);
        console.log("Age: ", this.state.age);
        console.log("Natioality: ", this.state.nationality);
        console.log("Address: ", this.state.address);
        toast.success("Changes saved in console")
    }
    render() {
        return (
            <div>
                <TopBar title="User Info" />
                <div className="container">
                    <MDBCol md="12">
                        <MDBCard className="CardHover">
                            <MDBCardBody>
                                <form onSubmit={this.handleSubmit}>
                                    <MDBRow>
                                        <MDBCol md="4">
                                            <label >First Name</label>
                                            <MDBInput
                                                className="form-control"
                                                value={this.state.firstName}
                                                name="firstName"
                                                onChange={this.handleInputs} />
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <label >Last Name</label>
                                            <MDBInput type="text"
                                                className="form-control"
                                                value={this.state.lastName}
                                                name="lastName"
                                                onChange={this.handleInputs}
                                            />
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <label >Role</label>
                                            <MDBInput type="text"
                                                className="form-control"
                                                value={this.state.role}
                                                name="role"
                                                onChange={this.handleInputs}
                                            />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol md="4">
                                            <label >Email</label>
                                            <MDBInput type="email"
                                                className="form-control"
                                                value={this.state.email}
                                                onChange={this.handleInputs}
                                                name="email" />
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <label>Password</label>
                                            <MDBInput type="password"
                                                className="form-control"
                                                value={this.state.password}
                                                onChange={this.handleInputs}
                                                name="password" />
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <label >Nationality</label>
                                            <select className="browser-default custom-select"
                                                value={this.state.nationality}
                                                onChange={this.handleInputs}
                                                name="nationality" >
                                                <option defaultValue>Select Your Nationality</option>
                                                <option value="1">Lebanese</option>
                                                <option value="2">Not Lebanese</option>
                                                <option value="3">Other</option>
                                            </select>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol md="4">
                                            <label>Age</label>
                                            <MDBInput type="number"
                                                className="form-control"
                                                value={this.state.age}
                                                onChange={this.handleInputs}
                                                name="age" />
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <label>Phone Number</label>
                                            <MDBInput type="number"
                                                className="form-control"
                                                value={this.state.phoneNum}
                                                onChange={this.handleInputs}
                                                name="phoneNum" />
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <label >Address</label>
                                            <MDBInput type="textarea"
                                                className="form-control rounded-0"
                                                rows="2"
                                                value={this.state.address}
                                                onChange={this.handleInputs}
                                                name="address" />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBCol md="2">
                                        <div className='text-center '>
                                            <MDBBtn md={4} className='loginBtn' onClick={this.handleSubmit} >
                                                Save
                  </MDBBtn >
                                        </div>
                                    </MDBCol>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </div>
            </div >
        );
    }
}

export default UserInfo;
