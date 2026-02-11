import "./confirmAccountWarning.css";

export default function ConfirmAccountWarning() {
    return (
        <>
            <div className="confirmAccountWarning">
                <p>{localStorage.getItem("username")} - you account was been activated</p>
            </div>
        </>
    )
}
