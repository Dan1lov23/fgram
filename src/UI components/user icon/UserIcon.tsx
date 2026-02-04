import "./userIcon.css";

export default function UserIcon({userIconSrc}:{userIconSrc:any}) {


    return (
        <>
            <div className="userIcon">
                {userIconSrc === "none" ? (
                    <div className="noIcon">
                        <p>?</p>
                    </div>
                ) : (
                    <img src={userIconSrc}/>
                )}
            </div>
        </>
    )
}
