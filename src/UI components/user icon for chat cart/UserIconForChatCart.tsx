import "./userIconForChatCart.css";

export default function UserIconForChatCart({iconSrc}:{iconSrc:string}) {
    return (
        <>
            <div className="userIconForChatCart">
                {iconSrc === "none" ? (
                    <div className="noIcon">
                        <p>?</p>
                    </div>
                ) : (
                    <img src={iconSrc} style={{width: "70px", height: "70px", borderRadius: "50%", objectFit: "cover"}}/>
                )}
            </div>
        </>
    )
}
