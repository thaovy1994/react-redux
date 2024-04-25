import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
       usersList: [
        {id: 1, name: "Nguyen Van An", age: 20},
        {id: 1, name: "Nguyen Van B", age: 18},
        {id: 1, name: "Nguyen Van C", age: 29},
       ]
    }

    handleAddNewUesrs = (userObj) => {
        this.setState({
            //dấu ... copy lại data của mảng đang có và userObj nằm ở đầu
            usersList: [userObj, ...this.state.usersList]
            // userObj nằm ở cuối:
            // usersList: [...this.state.usersList, userObj]
        })
    }

    handleDeleteUser = (userId) => {
        let usersListClone = [...this.state.usersList]
        usersListClone = usersListClone.filter(item => item.id !== userId)
        this.setState({
            usersList: usersListClone //update
        })
    }

    render(){ //collect all HTML -> UI
        //JSX -> html inside js
        return (
            <>
            <div className="a">
                <AddUserInfor
                    handleAddNewUesrs = {this.handleAddNewUesrs}
                    //ko có dấu () sau hàm vì đang tham chiếu, ko phải gọi hàm
                />
                <DisplayInfor 
                    // name = {"Karen"} age ={26}
                    usersList={this.state.usersList}
                    usersList2={this.state.usersList}
                    handleDeleteUser = {this.handleDeleteUser}
                />
           </div>
           <div className="b">

           </div>
            </>
        );
    }
}
//used in other place
export default MyComponent;