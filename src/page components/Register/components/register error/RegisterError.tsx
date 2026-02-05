import "./registerError.css";

export default function RegisterError({error}:{error:string}) {
    return (
        <>
            <div className="loginError">
                <p>{error}</p>
            </div>
        </>
    )
}