import React from 'react'
import './Register.css';


class Register extends React.Component {
  state = {
    email: "",
    password: "",
    name: ""
  }

  onNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  onEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  onPasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  onSubmitSignIn = () => {
    fetch("https://nameless-caverns-03362.herokuapp.com/register", {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
    .then(response => response.json())
    .then(user => {
      if(user.id) {
        this.props.loadUser(user)
        this.props.onRouteChange("home");
      }
    })
  }

  render(){
    return (
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f2 fw6 ph0 mh0 register">Register</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f4" htmlFor="name">Name</label>
                  <input onChange={this.onNameChange} className="f4 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
                </div>

                <div className="mt3">
                  <label className="db fw6 lh-copy f4" htmlFor="name">Email</label>
                  <input onChange={this.onEmailChange} className="f4 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email"  id="email"/>
                </div>

                <div className="mv3">
                  <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
                  <input onChange={this.onPasswordChange} className="f4 b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                </div>
              </fieldset>
              <div className="">
                <input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib pointerhtml" type="submit" value="Register"/>
              </div>
            </div>
          </main>
        </article>

    )
  }

}

export default Register;
