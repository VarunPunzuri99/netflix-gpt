import React, { useEffect } from "react";
import Login from "./login";
import Browse from "./browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName } = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}))
        // navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        // navigate("/")
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
      {/* <Login />
      <Browse /> */}
    </div>
  );
};

export default Body;
