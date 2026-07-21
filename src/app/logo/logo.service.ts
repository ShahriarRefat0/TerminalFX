import fs from "node:fs";
import path from "node:path";
import { FileSystemService } from "../../core/filesystem/filesystem.service.js";

export class LogoService {
    private readonly fileSystem = new FileSystemService();
  show(name: string): void {
  let logoPath = this.getLogoPath(name);

  if (!this.fileSystem.exists(logoPath)) {
    logoPath = this.getLogoPath("default");
  }

  const logo = this.fileSystem.readFile(logoPath);

  console.log(logo);

  
}
private getLogoPath(name: string): string {
  return path.join(
    process.cwd(),
    "src",
    "assets",
    "logos",
    `${name}.txt`
  );
}

getAvailableLogos(): string[] {
  return this.fileSystem
    .readDirectory(this.getLogoDirectory())
    .filter(file => file.endsWith(".txt"))
    .map(file => path.parse(file).name);
}

private getLogoDirectory(): string {
  return path.join(
    process.cwd(),
    "src",
    "assets",
    "logos"
  );
}
}