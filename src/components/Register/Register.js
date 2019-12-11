import React, {Component} from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    onSubmitRegister = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('signin');
                }
            })

    }
    render() {
        const {onRouteChange} = this.props;
        return (
            <article className="br2 ba b--black-10 mv4 w-80 w-50-m w-25-l mw6 shadow-5 center">
                 <main className="pv4 black-80">
                     <div className="measure">
                         <fieldset id="sign-in" className="ba b--transparent ph0 mh0">
                             <legend className="f2 fw6 ph0 mh0 center">Sign Up</legend>
                             <div className="mt3">
                                 <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                 <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name"
                                 onChange={this.onNameChange}
                                 />
                             </div>
                             <div className="mt3">
                                 <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                 <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address"
                                 onChange={this.onEmailChange} />
                             </div>
                             <div className="mv3">
                                 <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                 <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password"
                                 onChange={this.onPasswordChange} />
                             </div>
                             <div className="mv3">
                                 <label className="db fw6 lh-copy f6" htmlFor="password">Re-type Password</label>
                                 <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                             </div>
                         </fieldset>


                         <div className="">
                             <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign Up!" onClick={this.onSubmitRegister} />
                         </div>
                         <div className="lh-copy mt3">
                             <p className="f6 black">Already a member?</p>
                             <p onClick={() => onRouteChange('signin')} className="f6 link dim underline black pointer db">Sign in</p>
                         </div>
                     </div>
                 </main>
             </article>
         )
    }
    }

export default Register;