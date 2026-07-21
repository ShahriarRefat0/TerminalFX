import { ConfigService } from "../../core/config/config.service.js";
import { LoggerService } from "../logger/logger.service.js";

export class PreviewService {
  private readonly configService = new ConfigService();
  private readonly logger = new LoggerService();
  run(): void {
    const config = this.configService.readConfig();

    console.log("========================");
    this.logger.info("TerminalFX Preview");
    console.log("========================\n");
    console.log(`Theme   : ${config.theme}`);
    console.log(`Logo    : ${config.logo}`);
    console.log(`Prompt  : ${config.prompt}`);
    console.log(`Startup : ${config.startup}`);
    console.log(`Version : ${config.version}`);
  }
}
