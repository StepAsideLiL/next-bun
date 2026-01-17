import { file } from "bun";

export async function GET() {
  try {
    const readFile = file("./src/app/globals.css");

    return await readFile
      .text()
      .then((text) => {
        return Response.json({
          error: false,
          data: text,
          message: "Text data",
        });
      })
      .catch(() => {
        return Response.json({
          error: true,
          data: null,
          message: "Failed to read file.",
        });
      });
  } catch {
    return Response.json({
      error: true,
      data: null,
      message: "Failed to read file.",
    });
  }
}
