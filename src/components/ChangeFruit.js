
const { useState } = require("react");

/* Hooks = inbyggda funktioner som låter oss "hook into" (dvs få tillgång till)
useState och andra reactfunktioner utan att använda 'classes' 
Det finns 15 hooks i React*/


function ChangeFruit() {
    const [type, setFruit] = useState("?");


/* syntax för useState:
const[state, setState] = useState(initialState);

const = en konstant variabel (dvs. kan inte ändras)
state = namnet på vår state (t ex 'type', 'color', 'weight')
setState = en funktion som ska ändra värdet på vår state (setFruit)
useState = en hook!
initialState = startvärdet på vår state (när vi öppnar sidan)

USE = använda.
useState returnerar vårt nuvarande state ("apple") och en funktion som låter oss
uppdatera vårt state!
 */

return (

    <>
    <h1>My favorite fruit is {type}!</h1>

    <div className="ColorBtn">

<button
type="button"
onClick={() => setFruit("kiwi")}>
Kiwi
</button>

<button
type="button"
onClick={() => setFruit("pineapple")}>
Pineapple
</button>
<button
type="button"
onClick={() => setFruit("Cherry")}>
Cherry
</button>
<button
type="button"
onClick={() => setFruit("Pear")}>
Pear
</button>
    </div>
    </>
);
}
export default ChangeFruit; 