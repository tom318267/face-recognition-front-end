import React from 'react'
import './SignIn.css';


class SignIn extends React.Component {

  state = {
    signInEmail: "",
    signInPassword: ""
  }

  onEmailChange = (event) => {
    this.setState({
      signInEmail: event.target.value
    })
  }

  onPasswordChange = (event) => {
    this.setState({
      signInPassword: event.target.value
    })
  }

  onSubmitSignIn = () => {
    fetch("https://nameless-caverns-03362.herokuapp.com/signin", {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
    .then(response => response.json())
    .then(user => {
      if(user.id) {
        this.props.loadUser(user);
        this.props.onRouteChange("home");
      }
    })
  }


  render() {
    const { onRouteChange } = this.props;
    return (
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f2 fw6 ph0 mh0 signIn">Sign In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
                  <input onChange={this.onEmailChange} className="f4 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
                  <input onChange={this.onPasswordChange} className="f4 b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                </div>
              </fieldset>
              <div className="">
                <input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib" type="submit" value="Sign in"/>
              </div>
              <div className="lh-copy mt1">
                <p onClick={() => onRouteChange("register")} href="#0" className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib pointerhtml">Register</p>
              </div>
            </div>
          </main>
        </article>
    )
  }
}

export default SignIn;
