import * as React from 'react';
import { Component } from 'react';
import { Props, loginState } from "../interface/interface";
import axios from "axios";
import baseUrl from "../configure/config";

class LogIn extends Component<Props, loginState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            message: "",
            token: ""
        };
    }

    componentDidMount(){
        console.log(this.props)
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        if (email && password) {
            this.postData(email, password)
        }
    }

    postData = (email, password) => {
        const data = { email, password };
        axios.post(baseUrl.localUrl + "/login", data)
            .then((res) => {
                if (res.data && res.data.message) {
                    this.setState({ message: res.data.message });
                } else {
                    this.setState({ token: res.data.token });
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    handleChange = (e: any) => {
        const { name, value } = e.target;
        this.setState({ [name]: value, message: "" } as loginState)
    }

    render() {
        const { email, password, message } = this.state;
        return (
            <div className="container">
                {/* Trigger the modal with a button */}
                <div className="text-left">
                    <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">login</button>
                </div>

                {/* Modal */}
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">

                        {/* Modal content */}
                        <div className="modal-content bgimg">
                            <div className="modal-header">
                                <button type="button" className="close btn btn-danger" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="container pt-3">
                                <div className="row justify-content-sm-center">
                                    <div className="col-sm-10 col-md-12">
                                        <div className="card border-info">
                                            <div className="card-header">Log in to continue</div>
                                            <div className="card-body bgimg">
                                                <div className="row">
                                                    <div className="col-md-8">
                                                        <form className="form-signin" onSubmit={this.handleSubmit}>
                                                            <input type="text" name="email" value={email} className="form-control mb-2" placeholder="Email" required autoFocus onChange={this.handleChange} />
                                                            <input type="password" name="password" value={password} className="form-control mb-2" placeholder="Password" required onChange={this.handleChange} />
                                                            <button className="btn btn-lg btn-primary btn-block mb-1" type="submit">Log in</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="/signup" className="float-right">Create an account </a>
                                    </div>
                                    {message ? <p className="text-danger text-center">{message}</p> : null}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default LogIn;