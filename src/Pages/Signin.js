import React, { Component } from 'react';
import { FormGroup, Row, Col, Label, Button } from 'reactstrap';
import background from '../Assets/imgs/background.jpg';
import userInfo from '../data/userInfo.json';
import { toast } from 'react-toastify';
import { MDBInput } from "mdbreact";

var backgroundStyle = {
    backgroundImage: `url(${background})`,
};
class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }
    componentDidMount() {
        localStorage.removeItem('authToken');
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = async (e) => {
        e.preventDefault();
        e.persist();

        var data = {
            Username: this.state.username.toLowerCase(),
            Password: this.state.password,
        };

        if (userInfo[data.Username] && userInfo[data.Username].password === data.Password) {
            localStorage.setItem('authToken', data.Username);
            this.props.history.push('/');
            toast.success('Welcome ' + userInfo[data.Username].name);
        }
        else if (!userInfo[data.Username]) {
            toast.error("User Doesn't exist!");
        }
        else if (userInfo[data.Username] && userInfo[data.Username].password !== data.Password) {
            toast.warn("Incorrect Password!");
        }
        else if (this.state.username === "" && this.state.password !== "") {
            toast.warn('Please fill email field!');
        }
        else if (this.state.password === "" && this.state.username !== "") {
            toast.warn('Please fill password field!');
        }
        else if (this.state.password === "" && this.state.username === "") {
            toast.warn('All fields are required!');
        }

    };
    render() {
        return (
            <div className='signin' style={backgroundStyle}>
                <Col sm='10' md='6' lg='3' className='mx-auto h-100 centerContent '>
                    <div>
                        <div className='flexCenter signinBackground'>
                            <form
                                name='form'
                                onSubmit={this.handleSubmit}
                                className='formConten'
                            >
                                <Label className='centerContent signInText'>Sign in </Label>
                                <Row>
                                    <Col md={12}>
                                        <FormGroup className='inputForm'>
                                            <MDBInput
                                                type='email'
                                                name='username'
                                                hint='Username'
                                                className='loginInputs'
                                                onChange={this.handleChange}
                                                value={this.state.email}
                                                tabIndex={1}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <FormGroup>
                                            <MDBInput
                                                type='password'
                                                name='password'
                                                hint='Password'
                                                className='loginInputs'
                                                onChange={this.handleChange}
                                                value={this.state.password}
                                                autoComplete={'on'}
                                                tabIndex={2}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <div className='text-center '>
                                    <Button md={6} className='loginBtn' >
                                        Log in
                  </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Col>
            </div>
        );
    }
}
export default Signin;
