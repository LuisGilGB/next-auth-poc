'use client'

import {signIn} from "next-auth/react";

const LoginButton = () => (
  <button
    className="m-4 cursor-pointer"
    onClick={async () => {
      console.log('login button clicked');
      await signIn();
    }}
  >
    Login
  </button>
);

export default LoginButton;
