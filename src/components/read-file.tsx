import { file } from "bun";
import { cn } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";

export default async function ReadFile({ className }: { className?: string }) {
  const readFile = file("./src/app/globals.css");

  const text = (await readFile.text()) || "";

  return (
    <div className={cn("space-y-4 p-2", className)}>
      <div>
        <h1 className="text-lg font-bold">Get File</h1>
        <p>
          Read file with <span className="font-mono font-bold">Bun.file</span>
        </p>
      </div>

      <div className="px-2 py-1 border rounded-md h-full">
        <ScrollArea className="w-full h-full">
          <pre>{text}</pre>
        </ScrollArea>
      </div>
    </div>
  );
}
