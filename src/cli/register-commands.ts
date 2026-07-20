import { Command } from "commander";
import { createInstallCommand } from "../app/install/install.command.js";
import { createDoctorCommand } from "../app/doctor/doctor.command.js";

export function registerCommands(program: Command) {
    program.addCommand(createInstallCommand());
    program.addCommand(createDoctorCommand());
}