import * as React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';
import './spinner.css';

interface ISpinnerProps {
  area:string
}
// export class Spinner extends React.Component<ISpinnerProps, any> {

//   constructor(props:ISpinnerProps){
//     super(props);
//   }
  

//   getPromiseInProgress = () =>{
//     const {promiseInProgress} = usePromiseTracker({area: this.props.area});
//     return promiseInProgress;
//   }
   

//   render(){
//     let promiseInProgress =this.getPromiseInProgress()
//     if(promiseInProgress){
//       return(
//         <div className="spinner">
//           <Loader type="ThreeDots" color="#2BAD60" height={100} width={100} />
//         </div>
//       )
//     } else{
//       return (
//         <></>
//       )
//     }
//   }
  
//   // return (
//   //   {promiseInProgress} && (
//   //     <div className="spinner">
//   //       <Loader type="ThreeDots" color="#2BAD60" height={100} width={100} />
//   //     </div>
//   //   )
//   // );
// };


export const Spinner = ({area} : ISpinnerProps) => {
  
  const { promiseInProgress } = usePromiseTracker({area: area});

  if(promiseInProgress){
    return(
      <div className="spinner">
        <Loader type="ThreeDots" color="#2BAD60" height={100} width={100} />
      </div>
    )
  } else{
    return (
      <></>
    )
  }
  // return (
  //   {promiseInProgress} && (
  //     <div className="spinner">
  //       <Loader type="ThreeDots" color="#2BAD60" height={100} width={100} />
  //     </div>
  //   )
  // );
};