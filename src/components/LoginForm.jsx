import React from "react"

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      password: null
    }
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      [`${e.target.name}`] : e.target.value
    })
  }


  render(){
    return(
      <React.Fragment>
        <div className="login-form-container">

          <form action="" id="login-form" autoComplete="off" onSubmit={this.props.onSubmit}>
            <label htmlFor="">
              username :
              <input type="text" id="name" name="username" onChange={this.handleChange} autoComplete="false"/>
            </label>

            <label htmlFor="">
              password :
              <input type="password" password="username" autoComplete="false"/>
            </label>

            <button type="submit" className="btn-primary">log in</button>

          </form>

        </div>
      </React.Fragment>
    )
  }
}

export default LoginForm;
