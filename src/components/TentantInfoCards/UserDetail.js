import "../component.css";
import userProfile from "../../assets/images/UserPic.png"
function UserDetail({data}){
    return (
        <div className="user-detail">
            <h4>User Details</h4>
                <img src={userProfile} alt="Profile Pic" />
                    <strong>Unit No:</strong> {data?.["Unit No"]}
                    <strong>Name:</strong> {data?.["Name"]}
                    <strong>Mobile No:</strong> {data?.["Mobile No"]}
                    <strong>Email:</strong> {data?.["Email"]}  
        </div>
    );
}
export default UserDetail;