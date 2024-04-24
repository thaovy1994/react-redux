import React from "react";

class DisplayInfor extends React.Component {
    render(){
        console.log(this.props);//props: tự động truyền từ cha sang con
        return(
            <div>
                Display Information<br/>
                {this.props.name}
            </div>
        )
    }
}
export default DisplayInfor;