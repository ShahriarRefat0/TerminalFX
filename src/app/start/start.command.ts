import { Command } from "commander";
import { StartService } from "./start.service.js";

export function registerStartCommand(): Command {
  const service = new StartService();

  return new Command()
    .command("start")
    .description("Run TerminalFX startup")
    .action(() => {
      service.run();
    });
}