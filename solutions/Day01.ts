import { fileURLToPath } from "url";
import File from "../util/File";

async function run(): Promise<void> {
  const input = new File("D:/dev/aoc2020/input/01.txt");
  const contents = await input.contents();

  console.log(contents.length);
  console.log(contents);
}

run();
