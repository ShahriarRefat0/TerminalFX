import { ConfigService } from "../../core/config/config.service.js";

export class PreviewService {
  private readonly configService = new ConfigService();

  run(): void {
    const config = this.configService.readConfig();

    console.log("========================");
    console.log("🚀 TerminalFX Preview");
    console.log("========================\n");

    console.log(config);
  }
}