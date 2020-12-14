import File from "../util/File";

function countChar(char: string, str: string): number {
  return str.split("").filter((c) => c === char).length;
}

async function run(): Promise<void> {
  const contents = await new File("02.txt").contents();

  // PART 1
  const p1RegExp = new RegExp(/([0-9]*)-([0-9]*) ([a-z]): ([a-z]*)/, "i");
  const p1 = contents
    .map((s) => p1RegExp.exec(s))
    .map((r) => ({ min: parseInt(r[1]), max: parseInt(r[2]), char: r[3], pass: r[4] }))
    .filter((r) => countChar(r.char, r.pass) >= r.min && countChar(r.char, r.pass) <= r.max);

  console.log(p1.length);
}

run();
