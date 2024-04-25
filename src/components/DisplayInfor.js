import React from "react";
import './DisplayInfor.scss';

class DisplayInfor extends React.Component {
    state = {
        isShowUsersList: true
    }
    handleShowHide = () => {
        this.setState({
            isShowUsersList: !this.state.isShowUsersList
        })
    }
    render(){
        //props: tự động truyền từ cha sang con
        //destructuring array/object = gán property của ...
        // const {age, name} = this.props;//dùng {} vì biến props tượng trưng cho 1 object
        const {usersList} =this.props;
        console.table(usersList);//render twice is caused by TrictMode
        return(
            <div className='display-infor-container'>
                {/* <img src={logo}/> */}
                Display Information<br/>
                <div>
                    <button onClick={()=> {this.handleShowHide()}}>
                        {this.state.isShowUsersList === true ? "Hide" : "Show"}
                    </button>
                </div>
                {/* {this.props.name}
                <br/>
                {name}
                {age} */}
                {this.state.isShowUsersList && //if this condition occur, it will render below
                    <div>
                    {usersList.map((user, index) => {
                    //Cách 1:
                    //Dấu + để ép kiểu string thành kiểu khác
                    // if(+user.age>20) {
                    //     return (
                    //         <div key={index} className="red">
                    //             <h2>My name is {user.name}</h2>
                    //             <h2>My age is {user.age}</h2>
                    //             <hr/>
                    //         </div>
                    //     )
                    // } else {
                    //     return (
                    //         <div key={index} className="green">
                    //             <h2>My name is {user.name}</h2>
                    //             <h2>My age is {user.age}</h2>
                    //             <hr/>
                    //         </div>
                    //     ) 
                    // }
                    //Cách 2:
                    return (
                        <div key={user.id} className={user.age > 20 ? "green" : "red"}>
                            <h3 style={{paddingTop:'5px'}}>My name is {user.name}</h3>
                            <h3>My age is {user.age}</h3>
                            <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                            <hr/>
                        </div>
                    ) 
                })}
                </div>
                }
            </div>
        )
    }
}
export default DisplayInfor;