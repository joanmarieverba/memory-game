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
            // Setting the initial state of the Counter component
        count: 0,
            // Setting the initial state of You Guessed correctly
        guessedCorrectly: "",
            // Setting this.state.friends to the friends json array
        friends: friends
    };


    // handleIncrement increases this.state.count by 1
    handleIncrement = (id) => {
        // We always use the setState method to update a component's state
        this.setState({ count: this.state.count + 1 });
        this.setState({ guessedCorrectly: "You Guessed Correctly"});
        console.log("count ", this.state.count);
        console.log("id", id);
        const friends = this.state.friends[id-1];
            this.setState
        console.log("friends", friends);
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

    // The render method returns the JSX that should be rendered
    //render() {
        // return (
        //     <div className="card text-center">
        //         <div className="card-header bg-primary text-white">
        //             <h3 className="card-title"> Click Counter!</h3>
        //         </div>
        //         <div className="card-body">
        //             <p className="card-text">Click Count: {this.state.count}</p>
        //             <button className="btn btn-primary" onClick={this.handleIncrement}>Increment</button>{" "}
        //             <button className="btn btn-danger" onClick={this.handleDecrement}>Decrement</button>
        //         </div>
        //     </div>
        // )

    render() {
        return (
            <Wrapper>
                <header style={header} >
                    <nav>
                        <ul style={line}>
                            <li style={line}>Memory Game</li>
                            <li style={line}>{this.state.guessedCorrectly}</li>
                            <li style={line}>Score: {this.state.count}</li>
                            <li style={line}>Top Score: {this.state.count}</li>
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

