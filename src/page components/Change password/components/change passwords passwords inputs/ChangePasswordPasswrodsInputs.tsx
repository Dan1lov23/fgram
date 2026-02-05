import "./changePasswordPasswordsInputs.css";

export default function ChangePasswordPasswordsInputs({setOldPassword, setNewPassword}:{setOldPassword: (oldPassword:string) => void, setNewPassword: (newPassword:string) => void}) {
    return (
        <>
            <div className="changePasswordPasswordsInputs">
                <input type="password" onChange={(e) => setOldPassword(e.target.value)} placeholder="Enter old password..."/>
                <input type="password" onChange={(e) => setNewPassword(e.target.value)} placeholder="Enter new password..."/>
            </div>
        </>
    )
}