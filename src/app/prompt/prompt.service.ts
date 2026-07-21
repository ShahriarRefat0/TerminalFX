import path from "node:path";
import { FileSystemService } from "../../core/filesystem/filesystem.service.js";

export class PromptService {
  private readonly fileSystem = new FileSystemService();

  private getPromptDirectory(): string {
    return path.join(
      process.cwd(),
      "src",
      "assets",
      "prompts"
    );
  }

  private getPromptPath(name: string): string {
    return path.join(
      this.getPromptDirectory(),
      `${name}.txt`
    );
  }

  show(name: string): void {
    let promptPath = this.getPromptPath(name);

    if (!this.fileSystem.exists(promptPath)) {
      promptPath = this.getPromptPath("default");
    }

    console.log(this.fileSystem.readFile(promptPath));
  }
}