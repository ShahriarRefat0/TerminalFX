// import { Command } from "commander";

// const program = new Command();

// program
//   .name("terminalfx")
//   .description("A modern terminal customization framework for Linux")
//   .version("0.1.0");

// program
//   .command("install")
//   .description("Install terminalfx")
//   .action(() => {
//     console.log("Installing terminalfx...");
//   });

// program
//   .command("uninstall")
//   .description("Uninstall terminalfx")
//   .action(() => {
//     console.log("Uninstalling terminalfx...");
//   });

// program
//   .command('version')
//   .description('Display the version of terminalfx')
//   .action(() => {
//     console.log("terminalfx version 0.1.0");
//   });

// program.parse();

import { program } from "./cli/program.js";
import { registerCommands } from "./cli/register-commands.js";

registerCommands(program);

program.parse();