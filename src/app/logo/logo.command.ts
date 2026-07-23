
import { Command } from "commander";
import { LogoService } from "./logo.service.js";

export function createLogoCommand(): Command {
  const logoService = new LogoService();

  return new Command("logo")
    .description("Manage TerminalFX logos")
    .addCommand(
      new Command("list")
        .description("List available logos")
        .action(() => {
          const logos = logoService.getAvailableLogos();

          console.log("Available logos:\n");

          logos.forEach((logo) => {
            console.log(`• ${logo}`);
          });
        }),
    );
}