import Nav from './components/Nav';
import Form from './components/Form';
import DisplayTeams from './components/DisplayTeams';
import './App.css';
import { useState } from 'react';
function App() {

  const [liOfTeams,getLi] = useState([]);

  let listOfnames;

  const getNames = (arr)=>{
    arr.shift();
    let result = shuffle(arr);
    result = shuffle(result);
    let formedTeams = formTwoTeams(result);
    console.log(formedTeams);
    getLi([...formedTeams]);
    console.log(liOfTeams,formedTeams,'assad');   
  }
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  const formTwoTeams = (arr)=>{
    let res = [];
    for(let i=0;i<Math.ceil(arr.length/2);i++){
      let obj = {};
      obj['id'] = i+1;
      obj['team'] = arr[i] + ' and ' + arr[arr.length-(i+1)];
      res.push(obj);
    }
    return res;
  }
  
  // Used like so

  

  return (
    <>
    <Nav></Nav>
    <Form getN={getNames}></Form>
    <DisplayTeams teams={liOfTeams}></DisplayTeams>
    </>
  );
}

export default App;
