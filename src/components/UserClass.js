import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "https://dummy-photo.com",
      },
    };
    // console.log(this.props.name + `Child Constructor`);
  }
  async componentDidMount() {
    console.log(`Parent ComponentDidMount`);
    // API Call

    const data = await fetch("  https://api.github.com/users/princepalewar12");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate(){
    console.log(`Parent componentDidUpdate`);
  }
  componentWillUnmount(){
    console.log(`parent component will unmount`);
  }
  render() {
    // console.log(this.props.name + `Child Rendered`);
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @princepalewar</h4>
      </div>
    );
  }
}
export default UserClass;
