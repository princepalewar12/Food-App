import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../ulits/UserContext";
class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log(`Parent Constructor`);
  }

 componentDidMount(){
    
 }
  render() {
    // console.log(`Parent Rendered`);
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({loggedInUser})=><h1 className="text-xl font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>This is namaste React web Series</h2>

        <UserClass name={`Prince Palewar`} location={`Nagpur`} />
       </div>
    );
  }
}
export default About;
