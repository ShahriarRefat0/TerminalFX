import { StartupService } from "../../core/startup/startup.service.js";
import { SystemService } from "../../core/system/system.service.js";
import { LoggerService } from "../logger/logger.service.js";

export class DoctorService {
  private readonly logger = new LoggerService();
  private readonly system = new SystemService();
  private readonly startup = new StartupService();

  run(): void {
    this.logger.info("🩺 TerminalFX Doctor\n");

    this.logger.info(`OS: ${this.system.getOS()}`);
    this.logger.info(`Node: ${this.system.getNodeVersion()}`);
    this.logger.info(`Shell: ${this.system.getShell()}`);

    console.log("----------------------------------------");

    this.checkCommand("git");
    this.checkCommand("fastfetch");
    this.checkCommand("starship");

    console.log("----------------------------------------");

    this.logger.info(`Shell Type: ${this.startup.getShell()}`);
    this.logger.info(`Config: ${this.startup.getShellConfigPath()}`);
    this.logger.info(
      `Config Exists: ${this.startup.hasShellConfig() ? "Yes" : "No"}`,
    );

    const startup = new StartupService();

console.log(startup.getHook());
  }

  private checkCommand(name: string): void {
    if (this.system.commandExists(name)) {
      this.logger.success(`${name}: Installed`);
    } else {
      this.logger.warning(`${name}: Not Installed`);
    }
  }
}
