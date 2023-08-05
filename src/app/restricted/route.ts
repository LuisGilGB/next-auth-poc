import {getServerSession} from "next-auth";
import {authOptions} from "@/app/auth/[...nextauth]/route";
import {NextApiRequest, NextApiResponse} from "next";
import {NextRequest, NextResponse} from "next/server";

export const GET = async (req: NextRequest) => {
  const session = await getServerSession(authOptions);

  const res = new NextResponse();
  if (session) {
    return NextResponse.json({
      content: "This is protected content. You can access this content because you are signed in.",
    });
  } else {
    return NextResponse.json({
      error: "You must be signed in to view the protected content on this page.",
    });
  }
}
