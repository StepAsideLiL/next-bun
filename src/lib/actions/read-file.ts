"use server";

import { file } from "bun";

export default async function readFile() {
  try {
    const readFile = file("./src/app/globals.css");

    return await readFile
      .text()
      .then((text) => {
        return {
          error: false,
          data: text,
          message: "Text data",
        };
      })
      .catch(() => {
        return {
          error: true,
          data: null,
          message: "Failed to read file.",
        };
      });
  } catch {
    return {
      error: true,
      data: null,
      message: "Failed to read file.",
    };
  }
}
