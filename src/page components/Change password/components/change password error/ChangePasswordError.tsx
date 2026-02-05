import "./changePasswordError.css";

export default function ChangePasswordError({error}:{error:string}) {
    return (
        <>
            <div className="changePasswordError">
                <p>{error}</p>
            </div>
        </>
    )
}
