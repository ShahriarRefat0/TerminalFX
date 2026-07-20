import { Command } from "commander";
import { PreviewService } from "./preview.service.js";

export function createPreviewCommand(): Command {
  return new Command("preview")
    .description("Preview TerminalFX configuration")
    .action(() => {
      new PreviewService().run();
    });
}