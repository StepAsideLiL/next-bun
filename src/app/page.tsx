import { file, SQL } from "bun";
import ReadFile from "@/components/read-file";
import { ScrollArea } from "@/components/ui/scroll-area";

export default async function Page() {
  const bunFile = file("./src/app/globals.css");
  const text = await bunFile.text();

  // const dbSql = new SQL(process.env.DATABASE_URL || "", {
  //   prepare: false,
  // });

  // const res = await dbSql`
  //   Select id, name from table_users;
  // `;

  // console.log(res);

  return (
    <div className="max-w-400 mx-auto w-full p-20">
      <div className="grid grid-cols-3 gap-5">
        <ReadFile className="col-span-1 row-span-1 aspect-square" />
      </div>
    </div>
  );
}
