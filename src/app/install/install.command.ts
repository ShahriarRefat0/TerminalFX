import { Command } from "commander";
import { InstallService } from "./nstall.service.js";

export function createInstallCommand(): Command {
  return new Command("install")
    .description("Install TerminalFX")
    .action(() => {
        const installService = new InstallService();
        installService.run();
      console.log("🚀 Installing TerminalFX...");
    });
}