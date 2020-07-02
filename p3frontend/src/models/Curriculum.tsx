export class Curriculum {
  curriculumId: number;
  name: string;
  curriculumSkillset: any;

  constructor(curriculumId: number, name: string, curriculumSkillset: any) {
    this.curriculumId = curriculumId;
    this.name = name;
    this.curriculumSkillset = curriculumSkillset;
  }
}
