import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth";
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
