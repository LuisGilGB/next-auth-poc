import {authOptions} from "@/config/auth";
import {getServerSession} from "next-auth";
import clsx from "clsx";

const CheckSessionPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className={clsx(
      'w-full h-full',
      'flex flex-col justify-center items-center gap-4',
      'p-12'
    )}>
      <h2>Check Session</h2>
      <pre>{session ? JSON.stringify(session) : '-'}</pre>
    </div>
  )
}

export default CheckSessionPage;
