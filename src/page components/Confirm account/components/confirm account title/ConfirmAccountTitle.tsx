import "./confirmAccountTitle.css";

export default function ConfirmAccountTitle() {
    return (
        <>
            <div className="confirmAccountTitle">
                <p>Hello, dear {localStorage.getItem("username")}!</p>
            </div>
        </>
    )
}