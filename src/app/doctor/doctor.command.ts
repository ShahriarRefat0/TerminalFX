import { Command } from "commander";
import { DoctorService } from "./doctor.service.js";

export function createDoctorCommand(): Command {
  return new Command("doctor")
    .description("Check system requirements")
    .action(() => {
      const doctorService = new DoctorService();
      doctorService.run();
    });
}