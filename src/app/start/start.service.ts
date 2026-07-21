import { ConfigService } from "../../core/config/config.service.js";
import { LoggerService } from "../logger/logger.service.js";
import { LogoService } from "../logo/logo.service.js";
import { PromptService } from "../prompt/prompt.service.js";
import { RandomService } from "../random/random.service.js";

export class StartService {
  private readonly logger = new LoggerService();
  private readonly configService = new ConfigService();
  private readonly logoService = new LogoService();
  private readonly randomService = new RandomService();
  private readonly promptService = new PromptService();
  run(): void {
    const config = this.configService.readConfig();

    if (!config.startup) {
      return;
    }

    let logo = config.logo;

    if (logo === "random") {
      logo = this.randomService.pick(this.logoService.getAvailableLogos());
    }
    this.logger.success("TerminalFX Started");
    this.logoService.show(config.logo);

    this.logoService.show(logo);

    this.promptService.show(config.prompt);
  }
}
