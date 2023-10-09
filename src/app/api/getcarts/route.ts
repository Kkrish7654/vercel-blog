import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const cart = await sql`SELECT * FROM carts;`;
  try {
    if (cart) {
        const rows = cart.rows
      return NextResponse.json({ rows }, { status: 200 });
    }
  } catch (error) {
    console.error(error);
  }
}
