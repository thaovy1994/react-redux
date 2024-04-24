import React from "react";

class UserInfor extends React.Component {
    state = {
        name: 'Mina',
        address: 'DAN',
        age: 30
    }
    //Dùng arrow function tại đây để hàm dùng đc biến this
    //handleClick = (event) =>{ ... }
    //or dùng arrow function ở hàm dc ánh xạ ở nút button
    handleClick (event) {
        // console.log("Click me button");
        // console.log(event.target);//<button>Click me!</button>
        console.log(this.state.name);
        //Truyền 1 biến object vào hàm setstate() để thay đổi name
        this.setState({
            // name: 'Jisoo',
            age: Math.floor((Math.random()*100)+1)
        })
    }

    handleOnMouseOver(event){
        console.log(event);
    }

    handleOnChangeInput(event){
       this.setState({
            name: event.target.value
       })
    }

    handleOnSubmit(event){
        //Ngăn reload trang
        event.preventDefault();
    }

    render(){
        return(
            <div>
                My name is {this.state.name}, am from {this.state.address}, I'm {this.state.age}
                <button onClick={(event) =>{this.handleClick(event)}}>Click me!</button>
                <button onMouseOver={this.handleOnMouseOver}>Hover me!</button>
                <form onSubmit={(event)=>{this.handleOnSubmit(event)}}>
                <label>Your name:</label>
                <input 
                value={this.state.name}
                type="text"
                onChange={(event)=>{this.handleOnChangeInput(event)}}
                />
                <br/>
                <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfor;