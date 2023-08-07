'use client'

import {signIn} from "next-auth/react";

const LoginButton = ({ providerId }: { providerId?: string }) => (
  <button
    className="m-4 cursor-pointer"
    onClick={async () => {
      await signIn(providerId);
    }}
  >
    Login
  </button>
);

export default LoginButton;
