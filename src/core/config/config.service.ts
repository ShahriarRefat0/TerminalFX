import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import type { Config } from "../../shared/types/config.type.js";

export class ConfigService {
  private readonly configPath = path.join(
    os.homedir(),
    ".config",
    "terminalfx",
    "config.json"
  );

    loadDefaultConfig(): string {
    const defaultConfigPath = path.join(
      process.cwd(),
      "src",
      "assets",
      "config",
      "default-config.json"
    );

    return fs.readFileSync(defaultConfigPath, "utf-8");
  }

readConfig(): Config {
  const content = fs.readFileSync(this.configPath, "utf-8");
  return JSON.parse(content) as Config;
}
}