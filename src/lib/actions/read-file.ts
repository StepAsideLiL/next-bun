"use server";

import { file } from "bun";

export default async function readFile() {
  try {
    const text = await file("./src/app/globals.css").text();
    return {
      error: false,
      data: text,
      message: "Text data",
    };
  } catch {
    return {
      error: true,
      data: null,
      message: "Failed to read file.",
    };
  }
}
