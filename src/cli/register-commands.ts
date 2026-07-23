import { Command } from "commander";
import { createInstallCommand } from "../app/install/install.command.js";
import { createDoctorCommand } from "../app/doctor/doctor.command.js";
import { createPreviewCommand } from "../app/preview/preview.command.js";
import { registerStartCommand } from "../app/start/start.command.js";
import { registerUninstallCommand } from "../app/uninstall/uninstall.command.js";
import { createConfigCommand } from "../app/config/config.command.js";
import { createLogoCommand } from "../app/logo/logo.command.js";
import { createPromptCommand } from "../app/prompt/prompt.command.js";

export function registerCommands(program: Command) {
    program.addCommand(createInstallCommand());
    program.addCommand(createDoctorCommand());
    program.addCommand(createPreviewCommand());
    program.addCommand(registerStartCommand());
   program.addCommand(registerUninstallCommand());
   program.addCommand(createConfigCommand());
   program.addCommand(createLogoCommand());
   program.addCommand(createPromptCommand());
}