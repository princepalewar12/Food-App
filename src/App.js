import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./ulits/UserContext";
import { Provider } from "react-redux";
import appStore from "./ulits/appStore";
import Cart from "./components/Cart";

// import Grocery from "./components/Grocery";

// React.createElement => ReactElement-JS object => HTMLElement(render)

const Grocery = lazy(() => {
  import("./components/Grocery");
});

const About = lazy(() => {
  import("./components/About");
});

const AppLayout = () => {
  const [userName, setUserName] = useState();

  // authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Prince Palewar",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      {/*  Default User */}
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        {/* Context value=> Elon Musk*/}
        <div className="app">
          <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}>
            {/*Context value=> Prince Palewar*/}
            <Header />
          </UserContext.Provider>
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading. . . . .</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
