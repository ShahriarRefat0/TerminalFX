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

  const logo = this.resolveRandom(
    config.logo,
    this.logoService.getAvailableLogos()
  );

  const prompt = this.resolveRandom(
    config.prompt,
    this.promptService.getAvailablePrompts()
  );

console.log(this.logoService.get(logo));

console.log();

console.log(this.promptService.get(prompt));
}
private resolveRandom(
  value: string,
  options: string[]
): string {
  if (value !== "random") {
    return value;
  }

  return this.randomService.pick(options);
}
}
