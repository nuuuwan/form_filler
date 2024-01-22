

export default function BoxView({ box }) {
    const { x1,y1,width, height } = box;


    return <textarea style={{
        position: "absolute",
        left: x1,
        top: y1,
      
        width: width,
        height: height,

        padding: 0,
        margin: 0,    
        opacity: 0.5,
    }}
    />;
}
