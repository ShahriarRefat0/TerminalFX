import { AssetService } from "../../core/asset/asset.service.js";

export class LogoService {
  private readonly assetService = new AssetService();

  get(name: string): string {
    return this.assetService.read("logos", name);
  }

  getAvailableLogos(): string[] {
    return this.assetService.list("logos");
  }
}