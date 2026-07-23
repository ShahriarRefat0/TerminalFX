import { Command } from "commander";
import { ConfigService } from "./config.service.js";
import type { Config } from "../../shared/types/config.type.js";


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
    )

    .addCommand(
      new Command("set")
        .description("Update configuration")
        .argument("<key>", "Configuration key")
        .argument("<value>", "Configuration value")
        .action((key, value) => {
          configService.set(key as keyof Config, value);
        })
    );
}