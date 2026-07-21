export class RandomService {
  pick<T>(items: T[]): T {
    if (items.length === 0) {
      throw new Error("Cannot pick from an empty array.");
    }

    const index = Math.floor(Math.random() * items.length);

    return items[index]!;
  }
}