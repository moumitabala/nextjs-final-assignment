import { NextRequest, NextResponse } from "next/server";
import { verifyjwt } from "@/lib/verifytoken";
import { UserModel } from "@/lib/db/model/users";

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value;
    const isLoggedIn: any = token && (await verifyjwt(token));
    const {
      payload: { id },
    } = isLoggedIn;
    const user = await UserModel.findById(id, { password: 0 });
    return Response.json(user)
  } catch (error) {
    return NextResponse.redirect("http://localhost:3000/error");
  }
}
