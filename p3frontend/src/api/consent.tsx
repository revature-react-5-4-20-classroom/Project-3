import { Consent } from "../models/Consent";
import { Trainer } from "../models/Trainer";
import { axiosClient } from "./axios";

export async function getAllEligibleTrainers(
  batchId: number
): Promise<Trainer[]> {
  const response = await axiosClient.get(`/trainer/eligible/${batchId}`);
  return response.data.map((trainerObj: any) => {
    const {
      trainerId,
      firstName,
      lastName,
      email,
      trainerSkills,
      consent,
      batch,
    } = trainerObj;

    return new Trainer(
      trainerId,
      firstName,
      lastName,
      email,
      trainerSkills,
      consent,
      batch,
      true
    );
  });
}

export async function getAllTrainers(): Promise<Trainer[]> {
  try {
    const response = await axiosClient.get("/trainer");
    return response.data.map((trainerObj: any) => {
      const {
        trainerId,
        firstName,
        lastName,
        email,
        trainerSkills,
        consent,
        batch,
      } = trainerObj;

      return new Trainer(
        trainerId,
        firstName,
        lastName,
        email,
        trainerSkills,
        consent,
        batch,
        false
      );
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
}
// export async function getAllTrainers(): Promise<Trainer[]> {
//   try {
//     const response = await axiosClient.get('/trainer');
//     return response.data.map((trainerObj: any) => {
//       const {
//         trainerId,
//         firstName,
//         lastName,
//         email,
//         trainerSkills,
//         consent,
//         batch,
//       } = trainerObj;

//       return new Trainer(
//         trainerId,
//         firstName,
//         lastName,
//         email,
//         trainerSkills,
//         consent,
//         batch,
//         false
//       );
//     });
//   } catch (e) {
//     console.log(e);
//     throw e;
//   }
// }

export async function createConsentRequest(
  trainerId: number,
  isApproved: null,
  batchId: number
) {
  try {
    console.log(trainerId);
    const response = await axiosClient.post("/consent", {
      trainerId: trainerId,
      batchId: batchId,
      isApprovedColumn: isApproved,
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
}
// export async function createConsentRequest(
//   trainerId: number,
//   isApproved: null,
//   batchId: number
// ) {
//   try {
//     const response = await axiosClient.post('/consent', {
//       trainerId: trainerId,
//       batchId: batchId,
//       isApproved: isApproved,
//     });
//     return response;
//   } catch (e) {
//     console.log(e);
//   }
// }

export async function createTrainerBatch(trainerId: number, batchId: number) {
  try {
    console.log(trainerId);
    const response = await axiosClient.post("/trainerbatch", {
      trainerId: trainerId,
      batchId: batchId,
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function approveConsentRequest(consent: Consent) {
  try {
    await axiosClient.patch("/consent", {
      consentId: consent.consentId,
      batchId: consent.batch.batchId,
      trainerId: consent.trainer.trainerId,
      isApprovedColumn: consent.isApproved,
    });

    await createTrainerBatch(consent.trainer.trainerId, consent.batch.batchId);
  } catch (e) {
    console.log(e);
  }
}
// export async function approveConsentRequest(consent: Consent) {
//   try {
//     await axiosClient.patch('/consent', {
//       consentId: consent.consentId,
//       batchId: consent.batchId,
//       trainerId: consent.trainerId,
//       isApprovedColumn: consent.isApproved,
//     });

//     //const response =  await axiosClient.patch('/consent', {consent:consent});
//     //return response;
//   } catch (e) {
//     console.log(e);
//   }
// }

export async function denyConsentRequest(consent: Consent) {
  try {
    await axiosClient.patch("/consent", {
      consentId: consent.consentId,
      batchId: consent.batch.batchId,
      trainerId: consent.trainer.trainerId,
      isApprovedColumn: consent.isApproved,
    });
  } catch (e) {
    console.log(e);
  }
}
// export async function denyConsentRequest(consent: Consent) {
//   try {
//     await axiosClient.patch('/consent', {
//       consentId: consent.consentId,
//       batchId: consent.batchId,
//       trainerId: consent.trainerId,
//       isApprovedColumn: consent.isApproved,
//     });

//     //const response =  await axiosClient.patch('/consent', {consent:consent});
//     //return response;
//   } catch (e) {
//     console.log(e);
//   }
// }

export async function getConsentByTrainerId(id: number): Promise<any[]> {
  try {
    const response = await axiosClient.get(`/consent/${id}`);
    return response.data.map((itemObj: any) => {
      const { consentId, trainer, isApproved, batch } = itemObj;
      return new Consent(consentId, trainer, isApproved, batch);
    });
  } catch (e) {
    // Add more error functionality later
    console.log(e.message);
    throw e;
  }
}
// export async function getConsentByTrainerId(id: number): Promise<any[]> {
//   try {
//     const response = await axiosClient.get(`/consent/${id}`);
//     return response.data.map((itemObj: any) => {
//       const { consentId, trainerId, isApproved, batchId } = itemObj;
//       return new Consent(consentId, trainerId, isApproved, batchId);
//     });
//   } catch (e) {
//     // Add more error functionality later
//     console.log(e.message);
//     throw e;
//   }

// }

export async function getEligibility(
  trainerId: number,
  batchId: number
): Promise<boolean> {
  const response: boolean = await axiosClient.get(
    `/trainer/eligible/${batchId}`,
    {
      params: {
        trainer: trainerId,
      },
    }
  );
  return response;
}

export async function getBatchName(batchId: number) {
  try {
    const response = await axiosClient.get(`/batches/${batchId}`);
    return response;
  } catch (e) {
    console.log(e);
  }
}
