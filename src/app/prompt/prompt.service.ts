import { AssetService } from "../../core/asset/asset.service.js";

export class PromptService {
  private readonly assetService = new AssetService();

  get(name: string): string {
    return this.assetService.read("prompts", name);
  }

  getAvailablePrompts(): string[] {
    return this.assetService.list("prompts");
  }
}