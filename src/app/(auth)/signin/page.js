import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SigninPage from "@/components/templates/SignInPage";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function Signin() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");

  return <SigninPage />;
}

export default Signin;
