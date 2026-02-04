import "./dontActivatedAccount.css";

export default function DontActivatedAccount() {
    return (
        <>
            <div className="dontActivatedAccount">
                <p>You account dont activate</p>
                <p>Please, check {localStorage.getItem("email")}</p>
            </div>
        </>
    )
}