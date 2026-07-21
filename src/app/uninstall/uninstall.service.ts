import { LoggerService } from "../logger/logger.service.js";
import { StartupService } from "../../core/startup/startup.service.js";

export class UninstallService {
  private readonly logger = new LoggerService();
  private readonly startupService = new StartupService();

  run(): void {
   const removed = this.startupService.removeHook();

  if (!removed) {
    this.logger.warning("TerminalFX is not installed.");
    return;
  }

    this.logger.success("TerminalFX uninstalled successfully.");
  }
}