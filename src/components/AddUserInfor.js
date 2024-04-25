import React from "react";

class AddUserInfor extends React.Component {
    state = {
        name: '',
        address: 'DAN',
        age: ''
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

    handleOnChangeAge(event){
        this.setState({
             age: event.target.value
        })
     }

    handleOnSubmit(event){
        //Ngăn reload trang
        event.preventDefault();
        this.props.handleAddNewUesrs({
            id: Math.floor((Math.random()*100)+1) + '-random',
            name: this.state.name,
            age: this.state.age
        });
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
                    <label>Your age:</label>
                    <input 
                    value={this.state.age}
                    type="text"
                    onChange={(event)=>{this.handleOnChangeAge(event)}}
                    />
                    <br/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddUserInfor;