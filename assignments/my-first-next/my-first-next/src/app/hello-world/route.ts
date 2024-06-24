import { NextResponse } from "next/server";

export async function GET(request) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return NextResponse.json(posts);
}
