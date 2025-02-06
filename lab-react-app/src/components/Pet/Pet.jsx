import "./Pet.css";

const Pet = (props) => { /* Arrow Function */ 
  return ( /* return Statement, da geschweifte Klammern */ 
    <div>
        <h1>{props.name}</h1> {/* props ist das Funktionsargument */}
        <h2>{props.animal}</h2> {/* Inhalt in geschweiften Klammern zeigt JS Expression */ } 
        <h2>{props.breed}</h2>
    </div>
  );
};
export default Pet; /* default export, um es ohne explizites Naming zu importieren */ 