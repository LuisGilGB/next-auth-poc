'use client'

import {ClientSafeProvider, signIn} from "next-auth/react";
import clsx from "clsx";

interface ProviderLoginButtonProps {
  provider: ClientSafeProvider;
  className?: string;
}

const ProviderLoginButton = ({provider, className}: ProviderLoginButtonProps) => (
  <button
    className={clsx('bg-gray-300 transition-transform shadow hover:translate-x-2 p-4', className)}
    onClick={async () => {
      await signIn(provider.id);
    }}
  >
    Login with {provider.name}
  </button>
);

export default ProviderLoginButton;
