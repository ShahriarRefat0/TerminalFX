import os from "node:os";
import path from "node:path";
import type { Shell } from "../../shared/types/shell.type.js";
import { FileSystemService } from "../filesystem/filesystem.service.js";
import { config } from "node:process";

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
  if (!this.hasShellConfig()) {
    return;
  }

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

installHook(): void {
  const configPath = this.getShellConfigPath();

  if (!this.hasShellConfig()) {
    this.fileSystem.writeFile(configPath, "");
  }

  this.backupShellConfig();

  if (this.hasTerminalFXHook()) {
    return;
  }

  this.fileSystem.appendFile(
    configPath,
    `\n\n${this.getHook()}\n`
  );
}

removeHook(): boolean {
  if (!this.hasShellConfig()) {
    return false;
  }

  const shellConfig = this.getShellConfigPath();

  const content = this.fileSystem.readFile(shellConfig);

  if (!content.includes(this.getHook())) {
    return false;
  }

  const updated = content.replace(`${this.getHook()}\n`, "");

  this.fileSystem.writeFile(shellConfig, updated);

  return true;
}
}