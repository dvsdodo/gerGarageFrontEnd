import "./submitButton.css";

function SubmitButton({ text }) {
    return (
        <div>
            <button className="btn-submit" >{text}</button>
        </div>
    )

}

export default SubmitButton;