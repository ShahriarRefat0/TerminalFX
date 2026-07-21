
import { program } from "./cli/program.js";
import { registerCommands } from "./cli/register-commands.js";

registerCommands(program);

program.parse();