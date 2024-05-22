import React from "react";
import "./DisplayInfor.scss";

class DisplayInfor extends React.Component {
  //   constructor(props) { //code follow OOP
  //     super(props);
  //     this.state = {
  //       isShowUsersList: true,
  //     };
  //   }

  state = {
    isShowUsersList: true,
  };

  componentDidMount() {
    setTimeout(() => {
      document.title = "Did mount";
    }, 3000);
  }

  //run when have change: New props/ setState()/ forceUpdate()
  componentDidUpdate(prevProps, PrevState, snapshot) {
    console.log(this.props.prevProps);
    if (this.props.usersList !== prevProps.usersList) {
      if (this.props.usersList.length == 5) {
        alert("U got 5 users");
      }
    }
  }

  handleShowHide = () => {
    this.setState({
      isShowUsersList: !this.state.isShowUsersList,
    });
  };
  render() {
    //destructuring array/object = gán property
    const { usersList } = this.props;
    console.table(usersList);
    return (
      <div className="display-infor-container">
        Display Information
        {/* <img src={logo} /> */}
        <br />
        <div>
          <button onClick={this.handleShowHide}>
            {this.state.isShowUsersList === true ? "Hide" : "Show"}
          </button>
        </div>
        {this.state.isShowUsersList && (
          <>
            {usersList.map((user) => {
              //Dấu + để ép kiểu string thành kiểu number
              return (
                <div key={user.id} className={+user.age > 20 ? "green" : "red"}>
                  <h4 style={{ paddingTop: "5px" }}>My name is {user.name}</h4>
                  <h4>My age is {user.age}</h4>
                  <button onClick={() => this.props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                  <hr />
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}
export default DisplayInfor;
