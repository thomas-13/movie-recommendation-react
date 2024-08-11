export const Modal = (props) => {
 
    return (
        <div
            onClick={props.onClose} className="modalBackground"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div className="modalBox">
                <div>Title: {props.movie.title}</div>
                <div>Year: {props.movie.year}</div>
                <div style={{fontSize: "15px",lineHeight: "20px", fontFamily: "sans-serif"}}
                    >Synopsis: {props.movie.synopsis}
                </div>
            </div>
        </div>
    );
};