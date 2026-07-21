import { ConfigService } from "../../core/config/config.service.js";
import { FileSystemService } from "../../core/filesystem/filesystem.service.js";
import path from "node:path";
import { LoggerService } from "../logger/logger.service.js";
import { StartupService } from "../../core/startup/startup.service.js";

export class InstallService {
  private readonly fileSystem = new FileSystemService();
  private readonly configService = new ConfigService();
  private readonly logger = new LoggerService();

  run(): void {
    const configPath = this.fileSystem.getConfigPath();

    this.fileSystem.createDirectory(configPath);
    this.fileSystem.createDirectory(path.join(configPath, "themes"));
    this.fileSystem.createDirectory(path.join(configPath, "logos"));
    this.fileSystem.createDirectory(path.join(configPath, "cache"));
    this.fileSystem.createDirectory(path.join(configPath, "backups"));

    const configFile = path.join(configPath, "config.json");

    const defaultConfig = this.configService.loadDefaultConfig();

    this.fileSystem.writeFile(configFile, defaultConfig);

    // this.logger.info(configPath);

    this.logger.success("Config directory ready");
    this.logger.success("Default config created");

    const startupService = new StartupService();

    startupService.backupShellConfig();
  }
}
