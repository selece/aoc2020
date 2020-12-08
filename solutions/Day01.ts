import File from "../util/File";

async function run(): Promise<void> {
  const input = new File("01.txt");
  const contents = await input.contents();

  const code = contents
    .map((s) => parseInt(s))
    .reduce((res, current, index, arr) => {
      if (index + 1 < arr.length && res === -1) {
        const search = arr
          .slice(index + 1)
          .map((v) => ({ sum: v + current, index, value: v }))
          .filter(({ sum }) => sum === 2020)
          .pop();

        if (!!search) {
          return search.value * current;
        }
      }

      return res;
    }, -1);

  console.log("part1 result is", code);
}

run();
