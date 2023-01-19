import React from "react";

class Fruit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: " banana",
            color: "yellow",
            weight: "50g"
        
        };

        console.log(this.props);
        console.log(this.state);
    }
/* 
props = skickar värden TILL vår component (globalt)
state = används INUTI vår component (lokalt)

props + state = all inputdata som skickas till vår render(), dvs det som vi vill visa på sidan.
*/

    changeColor = () => {
        this.setState({color: "dark green"});
    }

// setState = ett annat sätt att uppdatera skärmen/vårt UI än render()

/* En funktion:
1. Vi säger "nu kommer vi att uppatera state"
2. Vi byter ut color: yellow mot color: dark green
SET = bestämma
Det går inte ändra tillbaka! */

    render() {
        console.log(this.state.color);
        return (
            <div>
                <h1>My favorite fruit is a {this.state.color} {this.state.type}</h1>
                <button
                    type="button"
                    onClick={this.changeColor}
                    >
                     Change Color!
                </button>
            </div>
        );
    }
}

export default Fruit;