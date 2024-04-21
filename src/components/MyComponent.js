import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Mina',
        address: 'DAN',
        age: 30
    }
    render(){ //collect all HTML -> UI
        //JSX -> html inside js
        return (
           <div>
            My name is {this.state.name}, am from {this.state.address}
           </div> 
        );
    }
}
//used in other place
export default MyComponent;