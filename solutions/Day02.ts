import File from "../util/File";

function countChar(char: string, str: string): number {
  return str.split("").filter((c) => c === char).length;
}

function checkP2(i: number, j: number, char: string, pass: string): boolean {
  let count = 0;

  if (pass[i] === char) {
    count += 1;
  }

  if (pass[j] === char) {
    count += 1;
  }

  return count === 1;
}

async function run(): Promise<void> {
  const contents = await new File("02.txt").contents();

  const regexp = new RegExp(/([0-9]*)-([0-9]*) ([a-z]): ([a-z]*)/, "i");
  const parsed = contents
    .map((s) => regexp.exec(s))
    .map((r) => ({ min: parseInt(r[1]), max: parseInt(r[2]), char: r[3], pass: r[4] }));

  // PART 1
  const p1 = parsed.filter(({ pass, min, max, char }) => countChar(char, pass) >= min && countChar(char, pass) <= max);

  console.log("part 1 count:", p1.length);

  // PART 2
  const p2 = parsed.reduce((count, { char, max, min, pass }) => {
    if (checkP2(min, max, char, pass)) {
      count += 1;
    }

    return count;
  }, 0);

  console.log("part 2 count:", p2);
}

run();
