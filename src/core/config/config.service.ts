import fs from "node:fs";
import path from "node:path";
import os from "node:os";

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

  readConfig(): Record<string, unknown> {
    const content = fs.readFileSync(this.configPath, "utf-8");
    return JSON.parse(content);
  }
}