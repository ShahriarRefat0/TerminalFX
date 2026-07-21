import { Command } from "commander";
import { ConfigService } from "./config.service.js";

export function createConfigCommand(): Command {
  const configService = new ConfigService();

  return new Command("config")
    .description("Manage TerminalFX configuration")
    .addCommand(
      new Command("get")
        .description("Show current configuration")
        .action(() => {
          console.log(
            JSON.stringify(configService.get(), null, 2)
          );
        })
    );
}