import { readFile } from "fs/promises";

export default class File {
  private _path: string;
  static DEFAULT_INPUT_PATH: string = "D:/dev/aoc2020/input/";

  constructor(filename: string, path?: string) {
    this._path = (path ? path : File.DEFAULT_INPUT_PATH).concat(filename);
  }

  public async contents(): Promise<string[]> {
    const raw = await readFile(this._path);
    const processed: string[] = [];

    raw
      .toString()
      .split("\r\n")
      .forEach((s) => processed.push(s));

    return processed;
  }
}
