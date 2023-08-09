import {getProviders} from "next-auth/react";
import ProviderLoginButton from "@/components/ProviderLoginButton";
import clsx from "clsx";

const SignInPage = async () => {
  const providers = await getProviders();

  return (
    <div className="w-full p-12">
      <div className={clsx(
        "w-[720px] mx-auto bg-white",
        "flex flex-col items-center justify-center gap-4",
        "p-12 pr-16 border-gray-300 border-2 rounded",
        "shadow"
      )}>
        {providers && Object.values(providers).map(provider => (
          <ProviderLoginButton key={provider.id} provider={provider}/>
        ))}
      </div>
    </div>
  )
}

export default SignInPage;
