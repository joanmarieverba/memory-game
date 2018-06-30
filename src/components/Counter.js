import React from "react";
import Wrapper from "./Wrapper";
import friends from "./friends.json";

const header = {
    display: "inline-block",
    border: "1px solid #000",
    backgroundColor: "#ffffff",
    width: "100%",
    height: "51px",
}

const line = {
    display: "inline-block",
    margin: "10px 20px 0 20px",
    padding: "0",
    listStyleType: "none",
}

const imgStyle = {
    height: "150px",
    width: "150px",
    margin: "10px 20px 10px 20px",
}

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {

    state = {
            // Setting the initial state of the counter and top score
        count: 0,
        topScore: 0,
            // Setting the initial state of You Guessed Correctly
        guessedCorrectly: "",
            // Setting this.state.friends to the friends json array
        friends: friends
    };


    // handleIncrement 
    handleIncrement = (id) => {
   
        if (friends[id - 1].clicked === false) {

            friends[id - 1].clicked = true;

            // 
            // this.setState({ count: this.state.count + 1 });
            // this.setState({ guessedCorrectly: "You Guessed Correctly" });
            // this.setState({ friends });
              this.setState(prevState => ({
                count: prevState.count + 1,
                guessedCorrectly: "You Guessed Correctly",
                friends
              }));
      
            if (this.state.count >= this.state.topScore) {
                this.setState({ topScore: this.state.count + 1});
            }
        } else {
    
            friends.forEach ((friend) => {
                friend.clicked = false;
            })
            this.setState({ count: 0, guessedCorrectly: "Incorrect, game reset", friends });

        }
       this.shuffleImages();
    };

    shuffleImages = () => {
        this.setState(  { friends: friends.sort((a,b)=> 0.5 - Math.random())})
    };

    // handleDecrement decreases this.state.count by 1
    handleDecrement = () => {
        // We always use the setState method to update a component's state
        this.setState({ count: this.state.count - 1 });
    };


    render() {
        return (
            <Wrapper>
                <header style={header} >
                    <nav>
                        <ul style={line}>
                            <li style={line}>Memory Game</li>
                            <li style={line}>{this.state.guessedCorrectly}</li>
                            <li style={line}>Score: {this.state.count}</li>
                            <li style={line}>Top Score: {this.state.topScore}</li>
                        </ul>
                    </nav>
                </header>
             
                {this.state.friends.map(friend => (

                    <button key={friend.id} onClick={()=>this.handleIncrement(friend.id)}><img style={imgStyle} alt={friend.name} src={friend.image} /></button>
      
                ))}
            </Wrapper>
        );
    }
}




export default Counter;

