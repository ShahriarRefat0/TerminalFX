import { Command } from "commander";
import { InstallService } from "./install.service.js";

export function createInstallCommand(): Command {
  return new Command("install")
    .description("Install TerminalFX")
     .action(() => {
      const installService = new InstallService();
      installService.run();
    });
}