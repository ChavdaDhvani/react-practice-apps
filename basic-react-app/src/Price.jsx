export default function Price({oldPrice, newPrice}){
    let styles = {
        textDecorationLine: 'Line-through',
    }
    let bg = {
        backgroundColor: "#e0c267",
        height: "36px",
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",

    }
    return(
        <div style={bg}>
            <span style={styles}>{oldPrice}</span> &nbsp; &nbsp;
            <span><b>{newPrice}</b></span>
        </div>

    );
}