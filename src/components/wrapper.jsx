function Wrapper({children}) {
    return (
        <div style={{
            color: "black",
            fontWeight: 900,
            backgroundColor: "grey",
            width: "500px",
            padding: "10px",
            margin: "20px auto", }}>
                {children}
        </div>
    )
}

export default Wrapper