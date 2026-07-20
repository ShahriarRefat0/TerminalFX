import { ConfigService } from "../../core/config/config.service.js";
import { FileSystemService } from "../../core/filesystem/filesystem.service.js";
import path from "node:path";

export class InstallService {
  private readonly fileSystem = new FileSystemService();
private readonly configService = new ConfigService();



  run(): void {
    const configPath = this.fileSystem.getConfigPath();

    this.fileSystem.createDirectory(configPath);
    this.fileSystem.createDirectory(path.join(configPath, "themes"));
    this.fileSystem.createDirectory(path.join(configPath, "logos"));
    this.fileSystem.createDirectory(path.join(configPath, "cache"));
    this.fileSystem.createDirectory(path.join(configPath, "backups"));

    const configFile = path.join(configPath, "config.json");

    const defaultConfig = this.configService.loadDefaultConfig();

    this.fileSystem.writeFile(
      configFile,defaultConfig
    );

    console.log("✅ Config directory ready");
    console.log(configPath);
    console.log("✅ Default config created");
  }
  
}