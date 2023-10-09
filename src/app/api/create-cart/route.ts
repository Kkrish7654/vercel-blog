import { db } from "@vercel/postgres";
import { NextResponse } from "next/server";

interface Cart {
  rows: {
    id: number;
    name: string;
  }[];
}

interface Data {
  id?: number;
  name: string;
}

export async function GET(
  request: Request,
  response: Response
): Promise<NextResponse> {
  const query: string = `SELECT * FROM carts;`;

  try {
    const result = await db.query<Cart>(query);
    const rows: Cart[] = result.rows;
    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  const { name }: Data = await request.json();
  try {
    await db.query(`INSERT INTO carts (name) VALUES ('${name}')`);
    return NextResponse.json({ message: "ok" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
