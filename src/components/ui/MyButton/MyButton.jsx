import "./MyButton.css";

export default function MyButton({children, isActive, ...props}) {
    return (
        <button className={`mybtn ${isActive ? "active" : ""}`} {...props}>{children}</button>
    );
}