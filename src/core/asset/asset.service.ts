import path from "node:path";
import { FileSystemService } from "../filesystem/filesystem.service.js";

export class AssetService {
  private readonly fileSystem = new FileSystemService();

  read(category: string, name: string): string {
    let filePath = path.join(
      process.cwd(),
      "src",
      "assets",
      category,
      `${name}.txt`
    );

    if (!this.fileSystem.exists(filePath)) {
      filePath = path.join(
        process.cwd(),
        "src",
        "assets",
        category,
        "default.txt"
      );
    }

    return this.fileSystem.readFile(filePath);
  }

  list(category: string): string[] {
    const directory = path.join(
      process.cwd(),
      "src",
      "assets",
      category
    );

    return this.fileSystem
      .readDirectory(directory)
      .filter(file => file.endsWith(".txt"))
      .map(file => path.parse(file).name);
  }
}