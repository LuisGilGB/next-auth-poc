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
      {session ? (
          <div className="flex justify-center gap-4">
            <dl className="min-w-24 flex flex-col gap-2">
              <dt>Name</dt>
              <dd>{session?.user?.name}</dd>
              <dt>Email</dt>
              <dd>{session?.user?.email}</dd>
            </dl>
            <picture className="w-24 h-24 rounded-full overflow-hidden">
              <img
                src={session?.user?.image ?? ''}
                alt={session?.user?.name ?? 'Wrong source'}
                className="w-full h-full object-cover object-center"
              />
            </picture>
          </div>)
        : (
          <p>You are not authenticated</p>
        )}
    </div>
  )
}

export default CheckSessionPage;
