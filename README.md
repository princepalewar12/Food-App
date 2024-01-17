# Namaste React

# Parcel
- Dev Build
- Local Server
- HMR => Hot Module Replacement
- File Watching Algorithm - written in c++
- Caching - Faster Builds
- Image Optimization
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browser
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking => removes unused code.
- Different dev and prod bundle 

- Food app
/*
 *-header
 *  -logo
 *  -Nav items
 * -Body
 *  -search
 *  -Restaurant Container
 *      -restaurant card
 *      -img
 *      -name of restaurant, star rating, cuisine, delivery time
 * -Footer
 *  Copyright
 * Links
 * Address
 * Contact
 */
 
 Two types of import/export

 - Default export/import

 export default Component;
 import Component from "path";

- Named export/import

export const Component;
import {Component} from "path";

# React Hooks
(Normal js functions)
- useState() - super powerful state variable in react 
- useEffects()

# 2Types of Routing in web apps
 - Client side Routing
 - Server side Routing

# Redux Toolkit
 - Install @reduxjs/toolkit and react-redux
 - Build Our Redux Store
 - connect store to app
 - Create a cart Slice
 - Dispatch(Action)
 - selector
    
# Types of testing (Developer)
 - Unit Testing
 - Integration testing
 - End To End Testing => e2e Testing

# Setting up Testing in our App
 - Install React Testing Library
 - Install jest
 - Install babel dependencies
 - Configure Babel
 - Configure Parcel Config to disable default babel transpilation
 - Jest - npx jest --init
 - Install jsdom Library
 - Install @babel/preset-react - to make JSX work in test cases
 - Include @babel/preset-react inside my babel config
 - npm install -D @testing-library/jest-dom