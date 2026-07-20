import { Command } from "commander";

export const program = new Command();

program
  .name("terminalfx")
  .description("Modern terminal customization framework for Linux")
  .version("0.1.0");