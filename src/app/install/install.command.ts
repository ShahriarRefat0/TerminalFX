import { Command } from "commander";

export function createInstallCommand(): Command {
  return new Command("install")
    .description("Install TerminalFX")
    .action(() => {
      console.log("🚀 Installing TerminalFX...");
    });
}