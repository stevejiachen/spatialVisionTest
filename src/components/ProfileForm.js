import React, {Component} from 'react';

class ProfileForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: props.profile ? props.profile.name : '',
      email: props.profile ? props.profile.email : '',
      birthday: props.profile ? props.profile.birthday : '',
      address: props.profile ? props.profile.address : '',
      error: ''
    }
  }

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  }

  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  }

  onBirhdayChange = (e) => {
    const birthday = e.target.value;
    this.setState(() => ({ birthday }));
  }

  onAddressChange = (e) => {
    const address = e.target.value;
    this.setState(() => ({ address }));
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.name || !this.state.email) {
      this.setState(() => ({error: 'please provide name and email.'}))
    } else {
      this.setState(() => ({error: ''}));
      this.props.onSubmit({
        name:this.state.name,
        email:this.state.email,
        birthday:this.state.birthday,
        address:this.state.address
      })
    }
  }

  render() {
    return (
      <div >
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit} >
          <div className="form-group row">
            <label htmlFor="name-input" className="col-2 col-form-label">Name</label>
            <div className="col-10">
              <input
                className='form-input form-control'
                type="text"
                placeholder="name"
                autoFocus
                value={this.state.name}
                onChange={this.onNameChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="email-input" className="col-2 col-form-label">Email</label>
            <div className="col-10">
              <input
                className='form-input'
                type="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.onEmailChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="birthday-input" className="col-2 col-form-label">Birthday</label>
            <div className="col-10">
              <input
                className='form-input'
                type="date"
                placeholder="birthday"
                value={this.state.birthday}
                onChange={this.onBirhdayChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="address-input" className="col-2 col-form-label">Address</label>
            <div className="col-10">
              <input
                className='form-input'
                type="address"
                placeholder="address"
                value={this.state.address}
                onChange={this.onAddressChange}
              />
            </div>
          </div>

          <section className="submit">
            <button className="button form-button--save">Save Profile</button>
          </section>

        </form>
      </div>
    )
  }
}

export default ProfileForm;
