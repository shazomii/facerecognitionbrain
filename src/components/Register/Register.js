import React from 'react';

const Register = ({ onRouteChange }) => {
    return (


        <div className='center'>
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 pa3 shadow-3">
                <legend className="f2 fw6 ph0 mh0 center">Sign Up</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" />
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Re-type Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                </div>


                <div className="">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign Up!" onClick={() => onRouteChange('signin')} />
                </div>
                <div className="lh-copy mt3">
                    <p onClick={() => onRouteChange('signin')} className="f6 link dim black pointer db">Sign in</p>
                </div>
            </article>
        </div>


    )
}

export default Register;