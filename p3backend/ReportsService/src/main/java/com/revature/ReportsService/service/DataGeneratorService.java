package com.revature.ReportsService.service;

public class DataGeneratorService {

	public void predictFutureClientDemand() {

	}

	public void generateBatch() {

	}
	public MockBatch batches = new MockBatch();// sorted by required interview score in increasing order
	public MockAssociate associates = new MockAssociate();// sorted bye interview score in increasing order
	public MockClientDemand cDemands = new MockClientDemand();
	public Integer interviweScoreForBatch = 75;

	public void generateBAtch() {

		//        for (ClientDemand cd :this.cDemands) {
		//            ArrayList<MockAssociate> associatesInOneBatch;
		//            for (int i = 0; i <= cd.getQuantity()*1.5; i++) {
		//                Integer a = 0;
		//                for (int j = a; a <= associates.size(); j++) {
		//                    if (associates[j].interviewScore > interviweScoreForBatch) {
		//                        associatesInOneBatch.add(associates[j]);
		//                    }
		//                    a = j;
		//                }
		//            }
		//            // should batches get batch id after it get confirmed?
		//            // batches.add(new MockAssociate())
		//            // can take index+batches.size() as a batch id
		//            asociates.add(associatesInOneBatch);
		//            interviweScoreForBatch+=10;

		// }
	}

}
