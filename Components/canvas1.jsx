import React from "react";


// standard function
function sum(x,y){
  return x+ y;
}




//Functional Component
function Welcome(props){
  if(props.age < 15)
  return(
<h1>Welcome Junior {props.name}  your age is{props.age}<hr /></h1>
  )
  else
  return(
<h1>{props.name}  your age is{props.age}<hr /></h1>

    )
}

 
export default function Canvas1 (){

  let customers = [
    {name:"Mr. Ali", age:13}, 
    {name: "Ahmad", age:25},
    {name:"Zubair", age:23}];
    return(
          <>
          {
            customers.map(c => <Welcome name={c.name} age={c.age}/>)
          }
          </>
    );

}



// export default function Canvas1 (){

//       let customers = ["Mr. Ali", "Ahmad", "Zubair"]
//         return(
//               <>
//               <Welcome name="Mr. Ali" age={30}/>
//               <Welcome name={customers[1]} age={20}/>
//               <Welcome name="Zubair" age={35}/>
//               <Welcome />

//               </>
//         )
 
// }