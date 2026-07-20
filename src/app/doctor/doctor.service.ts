import { commandExists } from "../../shared/utils/command.js";

export class DoctorService {
  run(): void {
    console.log("🩺 TerminalFX Doctor\n");

    console.log(`OS: ${process.platform}`);
    console.log(`Node: ${process.version}`);
    console.log(`Shell: ${process.env.SHELL}`);

    console.log("");

    console.log(
      `Git: ${commandExists("git") ? "Installed" : "Not Installed"}`
    );

    console.log(
      `Fastfetch: ${
        commandExists("fastfetch") ? "Installed" : "Not Installed"
      }`
    );

    console.log(
      `Starship: ${
        commandExists("starship") ? "Installed" : "Not Installed"
      }`
    );
  }
}