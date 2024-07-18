function Btn({children, className, title, href}) {
    return (
        <button className={className}>
            {children} {title}
        </button>
    );
}
export default Btn;
