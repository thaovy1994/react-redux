import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {
    render(){ //collect all HTML -> UI
        //JSX -> html inside js
        return (
           <div>
                <UserInfor/>
                <DisplayInfor name='abc' age='23'/>
           </div> 
        );
    }
}
//used in other place
export default MyComponent;