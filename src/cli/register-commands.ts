import { Command } from "commander";
import { createInstallCommand } from "../app/install/install.command.js";

export function registerCommands(program: Command) {
    program.addCommand(createInstallCommand());
}