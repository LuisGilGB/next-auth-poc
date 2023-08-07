import {getProviders, signIn} from "next-auth/react";
import LoginButton from "@/components/LoginButton";

const SignInPage = async () => {
  const providers = await getProviders();

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-12 border-red-500 border-2">
      {providers && Object.values(providers).map(provider => (
        <div key={provider.name}>
          {provider.name}
          <LoginButton providerId={provider.id} />
        </div>
      ))}
    </div>
  )
}

export default SignInPage;
