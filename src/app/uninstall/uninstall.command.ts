import {  Command, program } from "commander";
import { UninstallService } from "./uninstall.service.js";

export function registerUninstallCommand(): Command {
  program
  return new Command("uninstall")
    .description("Remove TerminalFX from terminal startup")
    .action(() => {
        const uninstallService = new UninstallService();
        uninstallService.run();
    });
}

