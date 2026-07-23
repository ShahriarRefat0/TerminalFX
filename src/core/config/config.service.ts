import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import type { Config } from "../../shared/types/config.type.js";
import { FileSystemService } from "../filesystem/filesystem.service.js";

export class ConfigService {
  private readonly fileSystem = new FileSystemService();
  
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

writeConfig(config: Config): void {
  fs.writeFileSync(
    this.configPath,
    JSON.stringify(config, null, 2),
    "utf-8"
  );
}
}