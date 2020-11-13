import React, { useContext, useEffect, useState } from "react";
import API from "../../utils/SpellBookAPI";
import "./Spellbook.css";

function Spellbook() {
  const [classInfo, setClassInfo] = useState([]);
  const [proficiencies, setProficiencies] = useState([]);

  
  useEffect(() => {
    getClassesArray();
    getMonstersArray();
    getRacesArray();
    getDndEqupArray();
    getDndSpellsArray();
    getDndArmorArray();
    getDndWeaponArray();
    getDndRules();
  }, []);

  // function dndClassInfo(event) {
  //   let classType = event.target.value;
  //   console.log(event.target.value);

  //   API.getDndInfo(classType)
  //     .then((res) => {
  //       console.log(res.data);
  //       setClassInfo(res.data);
  //       setProficiencies(res.data.proficiencies);
  //     })
  //     .catch((err) => console.log(err));
  // }

  function getClassesArray() {
    API.getDndClasses().then((res) => {
      console.log(res.data.results)
    }).catch((err) => {console.log(err)})
  }

  function getMonstersArray() {
    API.getDndMonsters().then((res) => {
      console.log(res.data.results)
    }).catch((err) => {console.log(err)})
  }

  function getRacesArray(){
    API.getDndRaces().then((res) => {
      console.log(res.data.results)
      // target name for mapping
      // url for click API call query
    }).catch((err) => {console.log(err)})
  }

  function getDndEqupArray(){
    API.getDndEquipment().then((res) => {
      console.log(res.data.results)
    }).catch((err) => {console.log(err)})
  }

  function getDndSpellsArray(){
    API.getDndSpells().then((res) => {
      console.log(res.data.results)
    }).catch((err) => {console.log(err)})
  }

  function getDndArmorArray(){
    API.getDndArmor().then((res) => {
      console.log(res.data.equipment)
    }).catch((err) => {console.log(err)})
  }

  function getDndWeaponArray(){
    API.getDndWeapon().then((res) => {
      console.log(res.data.equipment)
    }).catch((err) => {console.log(err)})
  }

  function getDndRules(){
    API.getDndRules().then((res) => {
      console.log(res.data.results)
    }).catch((err) => {console.log(err)})
  }







// need to add more information 

  return (
    <>
      <div>
        <div className="container">
          <h1 className="center">Spellbook</h1>
          <div className="content-border sm12 m6 l4">
            <select className="browser-default" onChange="" key="">
              <option value="">Select</option>
              <option value="barbarian">Barbarian</option>
              <option value="bard">Bard</option>
              <option value="cleric">Cleric</option>
              <option value="druid">Druid</option>
              <option value="fighter">Fighter</option>
              <option value="monk">Monk</option>
              <option value="paladin">Paladin</option>
              <option value="ranger">Ranger</option>
              <option value="rogue">Rogue</option>
              <option value="sorcerer">Sorcerer</option>
              <option value="warlock">Warlock</option>
              <option value="wizard">Wizard</option>
            </select>

            <div className="">
              <h3 className="col s12 m6 l4">{classInfo.name}</h3>

              <ul>
                {/* {proficiencies.map((proficiencyType, i) => (
                  <li>
                    {i + 1} {proficiencyType.name}
                  </li>
                ))} */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Spellbook;
