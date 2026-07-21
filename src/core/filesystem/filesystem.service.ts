import fs from "node:fs";
import path from "node:path";
import os from "node:os";

export class FileSystemService {
  private readonly homeDirectory = os.homedir();

  getConfigPath(): string {
    return path.join(this.homeDirectory, ".config", "terminalfx");
  }

  createDirectory(directoryPath: string): void {
    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath, { recursive: true });
    }
  }

  exists(filePath: string): boolean {
    return fs.existsSync(filePath);
  }

  writeFile(filePath: string, content: string): void {
    fs.writeFileSync(filePath, content, "utf-8");
  }

  readFile(filePath: string): string {
  return fs.readFileSync(filePath, "utf-8");
}

copyFile(source: string, destination: string): void {
  fs.copyFileSync(source, destination);
}

appendFile(filePath: string, content: string): void{
  fs.appendFileSync(filePath, content, "utf-8");
}
}


