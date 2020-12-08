import { readFile } from "fs/promises";

export default class File {
  private _path: string;

  constructor(path: string) {
    this._path = path;
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
