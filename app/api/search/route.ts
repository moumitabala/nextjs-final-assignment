import "@/lib/db/db";
import { ProductsModel } from "@/lib/db/model/products";
import { UserModel } from "@/lib/db/model/users";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, {}) {
  const query = request.nextUrl.searchParams.get("query");
  const page = Number(request.nextUrl.searchParams.get("page")) || 1;
  const limit = 50;

  const skip = (page - 1) * limit;

  let searchQuery = {};

  if (query) {
    searchQuery = { $text: { $search: query } };
  }
  const total = await ProductsModel.countDocuments(searchQuery);
  const docs = await ProductsModel.find(searchQuery).skip(skip).limit(limit);

  return Response.json({ total: total, products: docs });
}
