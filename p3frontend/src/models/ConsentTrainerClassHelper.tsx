export class ConsentTrainerClassHelper {
  consentId: number;
  approved: boolean | null;

  constructor(consentId: number, isApproved: boolean | null) {
    this.consentId = consentId;
    this.approved = isApproved;
  }
}
