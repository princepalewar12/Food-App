import User from "./User";
import UserClass from "./UserClass";
import React from "react";

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
        <h2>This is namaste React web Series</h2>

        <UserClass name={`Prince Palewar`} location={`Nagpur`} />
       </div>
    );
  }
}
export default About;
