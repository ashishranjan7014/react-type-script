import * as React from 'react';
import { Component } from 'react';
import { Props, signupState } from "../interface/interface";
import axios from "axios";
import baseUrl from "../configure/config";
import history from "../history/history";

class SignUp extends Component<Props, signupState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            password: "",
            repeatepassword: "",
            error: false,
            message: ""
        };

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone, password, repeatepassword } = this.state;
        if (name && email && phone && (password === repeatepassword)) {
            this.postData(name, email, phone, password)
        } else {
            this.setState({ error: true })
        }
    }

    postData = (name, email, phone, password) => {
        const data = {
            name, email, phone, password
        };
        axios.post(baseUrl.localUrl + "/signup", data)
            .then((res) => {
                this.setState({ message: res.data.message })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    handleChange = (e: any) => {
        const { name, value } = e.target;
        this.setState({ [name]: value, error: false } as signupState)
    }

    render() {
        const { name, email, phone, password, repeatepassword, error, message } = this.state;
        if (message === "you have registered successfully" || message === "Email or phone already registered") {
            setTimeout(() => {
                console.log("settimeout");
                history.push("/");
            }, 2000)
        }
        return (
            <div className="container pt-3">
                <div className="row justify-content-sm-center">
                    <div className="col-sm-10 col-md-12">
                        <div className="card border-info">
                            <div className="card-header">signup</div>
                            <div className="card-body bgimg">
                                <div className="row">
                                    <div className="col-md-8">
                                        <form className="form-signin" onSubmit={this.handleSubmit}>
                                            <input type="text" name="name" value={name} className="form-control mb-2" placeholder="Name" required autoFocus onChange={this.handleChange} />
                                            <input type="text" name="email" value={email} className="form-control mb-2" placeholder="Email" required onChange={this.handleChange} />
                                            <input type="text" name="phone" value={phone} className="form-control mb-2" placeholder="Phone" required onChange={this.handleChange} />
                                            <input type="password" name="password" value={password} className="form-control mb-2" placeholder="Password" required onChange={this.handleChange} />
                                            <input type="password" name="repeatepassword" value={repeatepassword} className="form-control mb-2" placeholder="RepeatePassword" required onChange={this.handleChange} />
                                            <button className="btn btn-lg btn-primary btn-block mb-1" type="submit">signup</button>
                                        </form>
                                        {error ? <p className="text-danger text-center">password mismatched</p> : null}
                                        {message ? <p className="text-danger text-center">{message}</p> : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;