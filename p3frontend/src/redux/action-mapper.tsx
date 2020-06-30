import {Batch} from '../models/Batch'



export const clickTypes = {
    BATCH_CLICK: 'BATCH_CLICK',
}



export const batchClickActionMapper = (batchClicked:Batch) =>{
    return{
        type: clickTypes.BATCH_CLICK,
        payload:{
            batchClicked
        }
    }
}

/*
    All the action mappers can go here and be 
    used when needed anywhere in the project
*/
export const allTheActionMappers={
    batchClickActionMapper,
}