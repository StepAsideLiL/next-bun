import { file } from "bun";

export default async function Page() {
  const bunFile = file("./src/app/globals.css");
  const text = await bunFile.text();

  return (
    <div className="max-w-7xl mx-auto w-full p-20">
      <pre>{text}</pre>
    </div>
  );
}
