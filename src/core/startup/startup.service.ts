import os from "node:os";
import path from "node:path";
import type { Shell } from "../../shared/types/shell.type.js";
import { FileSystemService } from "../filesystem/filesystem.service.js";

export class StartupService {
    private readonly fileSystem = new FileSystemService();
  getShell(): Shell {
    const shell = process.env.SHELL ?? "";

    if (shell.includes("zsh")) return "zsh";
    if (shell.includes("bash")) return "bash";
    if (shell.includes("fish")) return "fish";

    throw new Error(`Unsupported shell: ${shell}`);
  }

  getShellConfigPath(): string {
    switch (this.getShell()) {
      case "zsh":
        return path.join(os.homedir(), ".zshrc");

      case "bash":
        return path.join(os.homedir(), ".bashrc");

      case "fish":
        return path.join(
          os.homedir(),
          ".config",
          "fish",
          "config.fish"
        );
    }
  }


  backupShellConfig(): void {
    const source = this.getShellConfigPath();

    const backupDirectory = path.join(
      os.homedir(),
      ".config",
      "terminalfx",
      "backups"
    );

    this.fileSystem.createDirectory(backupDirectory);

    const destination = path.join(
      backupDirectory,
      `${this.getShell()}rc.backup`
    );

    this.fileSystem.copyFile(source, destination);
  }

  hasShellConfig(): boolean {
  return this.fileSystem.exists(this.getShellConfigPath());
}

getHook(): string {
  return [
    "# >>> TerminalFX >>>",
    "terminalfx start",
    "# <<< TerminalFX <<<",
  ].join("\n");
}


 hasTerminalFXHook(): boolean {
    const configPath = this.getShellConfigPath();

    if (!this.fileSystem.exists(configPath)) {
      return false;
    }

    const content = this.fileSystem.readFile(configPath);

    return content.includes("# >>> TerminalFX >>>");
  }
}