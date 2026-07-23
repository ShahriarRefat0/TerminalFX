import { ConfigService as CoreConfigService } from "../../core/config/config.service.js";
import type { Config } from "../../shared/types/config.type.js";

export class ConfigService {
  private readonly configService = new CoreConfigService();

  get() {
    return this.configService.readConfig();
  }

  set<K extends keyof Config>(
  key: K,
  value: Config[K]
): void {
  const config = this.configService.readConfig();

  config[key] = value;

  this.configService.writeConfig(config);
}
}