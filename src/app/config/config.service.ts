import { ConfigService as CoreConfigService } from "../../core/config/config.service.js";

export class ConfigService {
  private readonly configService = new CoreConfigService();

  get() {
    return this.configService.readConfig();
  }
}