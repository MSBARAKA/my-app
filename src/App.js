import './App.css';
import '../node_modules/bulma/css/bulma.min.css';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import React, { useState } from "react";


function App() {

const [monState, setMonState] = useState([
    {tache: 'Mises à jour de la page démarches administratives', txt: "Mises à jour de la page démarches administratives"},
    {tache: 'Préparer le repas', txt: "Acheter de la viande"},
    {tache: 'application web', txt: "apprendre react js"}
])

const [tache, setTache] = useState()
const [txt, setTxt] = useState()


function CreationCarte(e){
  e.preventDefault();
  //console.log(tache,txt);
const nvTab = [...monState, {tache: tache, txt: txt}]
setMonState(nvTab);
console.log(nvTab);
setTache('');
setTxt('');
}

function suprCarte(index){
    const tabNettoyage = [...monState];

    setMonState(tabNettoyage.filter(item => tabNettoyage.indexOf(item)
    !== tabNettoyage.indexOf(tabNettoyage[index])));

       
         
}


  return (
    <div>
      
      <Header/>
      <div className="container px-3"></div>
      <h2 className="title mt-5">
        Rentrez vos tâches à faire
      </h2>
      <form onSubmit={CreationCarte}>

          <div className="field">

            <div className="control">

              <label htmlFor="tache" className="label">Tâche</label>
              <input
              value={tache} 
              className="input"
              type="text" id="tache"
              placeholder="Une tâche à faire"
              onchange={e=> setTache(e.target.value)}
              />
            </div>
          </div>



          <div className="field">

        <div className="control">

          <label htmlFor="txt" className="label">Contenu de la tâche</label>
          
          <textarea 
           value={txt} 
          className="textarea"
          type="text" id="txt"
          placeholder="Une tâche à faire"
          onChange={e=> setTxt(e.target.value)}
          >
          
         </textarea>
        </div>
        </div>

<div className="control">

 <button type="submit" className="button is-link">Créer une tâche</button>
</div>

      </form>

    {

      monState.map((todo,index)=>(
      <Card
      key={index}
      index={index}
      tache={todo.tache}
      txt={todo.txt}
      supprFunc={suprCarte}
      
      />

      ))

    }
    </div>
  );
}

export default App;
