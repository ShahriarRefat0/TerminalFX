import { commandExists } from "../../shared/utils/command.js";

export class SystemService {
  getOS(): string {
    return process.platform;
  }

  getNodeVersion(): string {
    return process.version;
  }

  getShell(): string {
    return process.env.SHELL ?? "Unknown";
  }

  commandExists(command: string): boolean {
    return commandExists(command);
  }
}