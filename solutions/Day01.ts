import File from "../util/File";

async function run(): Promise<void> {
  const input = new File("01.txt");
  const contents = await input.contents();

  // PART 1
  const p1 = contents
    .map((s) => parseInt(s))
    .reduce((res, current, index, arr) => {
      if (index + 1 < arr.length && res === -1) {
        const search = arr
          .slice(index + 1)
          .map((v) => ({ sum: v + current, value: v }))
          .filter(({ sum }) => sum === 2020)
          .pop();

        if (!!search) {
          return search.value * current;
        }
      }

      return res;
    }, -1);

  console.log("part 1 result is", p1);

  // PART 2
  const p2 = contents
    .map((s) => parseInt(s))
    .reduce((res, current, index, arr) => {
      if (index + 2 < arr.length && res === -1) {
        const search = arr.slice(index + 1);

        const searchResults: { e1: number; e2: number } = search.reduce(
          (searchRes, searchCurrent, searchIndex, searchArray) => {
            if (searchIndex + 1 < searchArray.length && !searchRes) {
              const subSearch = searchArray
                .slice(searchIndex + 1)
                .map((v) => ({ sum: v + searchCurrent, value: v }))
                .filter(({ sum }) => sum + current === 2020)
                .pop();

              if (!!subSearch) {
                return { e1: searchCurrent, e2: subSearch.value };
              }
            }

            return searchRes;
          },
          null as { e1: number; e2: number }
        );

        if (!!searchResults) {
          return current * searchResults.e1 * searchResults.e2;
        }
      }

      return res;
    }, -1);

  console.log("part 2 result is", p2);
}

run();
