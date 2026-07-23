
import { Command } from "commander";
import { PromptService } from "./prompt.service.js";

export function createPromptCommand(): Command {
  const promptService = new PromptService();

  return new Command("prompt")
    .description("Manage TerminalFX prompts")
    .addCommand(
      new Command("list")
        .description("List available prompts")
        .action(() => {
          const prompts = promptService.getAvailablePrompts();

          console.log("Available prompts:\n");

          prompts.forEach((prompt) => {
            console.log(`• ${prompt}`);
          });
        }),
    );
}