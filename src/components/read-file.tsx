"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

export default function ReadFile({ className }: { className?: string }) {
  const [text, setText] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  return (
    <div className={cn("space-y-4 p-2", className)}>
      <div>
        <Button
          disabled={loading}
          onClick={async () => {
            setLoading(true);
            const text = await fetch("/api/read-file").then((res) =>
              res.json(),
            );
            if (!text.error) {
              setText(text.data || "");
              setLoading(false);
            } else {
              setError(text.message);
              setLoading(false);
            }
          }}
        >
          Read File
        </Button>
      </div>

      <div className="px-2 py-1 border rounded-md h-full">
        <ScrollArea className="w-full h-full">
          <pre>{text && <div>{text}</div>}</pre>
        </ScrollArea>

        {error && <div className="text-destructive">{error}</div>}
      </div>
    </div>
  );
}
