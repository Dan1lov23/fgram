import "./messageUserIcon.css";

export default function MessageUserIcon({iconSrc}:{iconSrc:string}) {
    return (
        <>
            <div className="messageUserIcon">
                {iconSrc === "none" ? (
                    <div className="noIcon">
                        <p>?</p>
                    </div>
                ) : (
                    <img src={iconSrc}/>
                )}
            </div>
        </>
    )
}
