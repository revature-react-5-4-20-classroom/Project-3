import { Skill } from "../models/Skill";
import { ClientDemands } from "../models/ClientDemands";
import { Curricula } from "../models/Curricula";

export class TrainerSkills {
  skillSetId: number;
  skillSetName: string;
  skills: Skill[];
  clientDemands: ClientDemands[];
  curricula: Curricula[];

  constructor(
    skillSetId: number,
    skillSetName: string,
    skills: Skill[],
    clientDemands: ClientDemands[],
    curricula: Curricula[]
  ) {
    this.skillSetId = skillSetId;
    this.skillSetName = skillSetName;
    this.skills = skills;
    this.clientDemands = clientDemands;
    this.curricula = curricula;
  }
}
