import { ConfigService as CoreConfigService } from "../../core/config/config.service.js";
import type { Config } from "../../shared/types/config.type.js";
import { LogoService } from "../logo/logo.service.js";
import { PromptService } from "../prompt/prompt.service.js";

export class ConfigService {
  private readonly configService = new CoreConfigService();
  private readonly logoService = new LogoService();
private readonly promptService = new PromptService();
  
get() {
    return this.configService.readConfig();
  }

  


private isValidKey(key: string): key is keyof Config {
  return ["logo", "prompt", "startup", "version"].includes(key);
}

set(key: string, value: string): string {
  if (!this.isValidKey(key)) {
    throw new Error(`Unknown configuration key "${key}".`);
  }

  const config = this.configService.readConfig();

  switch (key) {
    case "logo":
      this.validateLogo(value);
      config.logo = value;
      this.configService.writeConfig(config);
      return `Logo updated to "${value}".`;

    case "prompt":
      this.validatePrompt(value);
      config.prompt = value;
      this.configService.writeConfig(config);
      return `Prompt updated to "${value}".`;

    case "startup":
      config.startup = this.parseBoolean(value);
      this.configService.writeConfig(config);
      return config.startup
        ? "Startup enabled."
        : "Startup disabled.";

    case "version":
      config.version = value;
      this.configService.writeConfig(config);
      return `Version updated to "${value}".`;
  
  default:
    throw new Error("Unexpected configuration key.");
}
}

private validateLogo(name: string): void {
  const logos = this.logoService.getAvailableLogos();

  if (!logos.includes(name)) {
    throw new Error(
      `Unknown logo "${name}".\n\nAvailable logos:\n• ${logos.join("\n• ")}`
    );
  }
}

private validatePrompt(name: string): void {
  const prompts = this.promptService.getAvailablePrompts();

  if (!prompts.includes(name)) {
    throw new Error(
      `Unknown prompt "${name}".\n\nAvailable prompts:\n• ${prompts.join("\n• ")}`
    );
  }
}

private parseBoolean(value: string): boolean {
  if (value === "true") {
    return true;
  }

  if (value === "false") {
    return false;
  }

  throw new Error(
    'Startup must be either "true" or "false".'
  );
}

}