import { execSync } from "node:child_process";

export function commandExists(command: string): boolean {
  try {
    execSync(`command -v ${command}`, {
      stdio: "ignore",
    });

    return true;
  } catch {
    return false;
  }
}