import { useState } from "react";
function Webpage(){
const [color, setColor] = useState("white");
return (
    <div style={{ backgroundColor: color, height: "100vh"}}>
    <h1>Background Color Changer</h1>
    <button onClick={() => setColor("red")}>Red</button>
    <button onClick={() => setColor("green")}>Green</button>
    <button onClick={() => setColor("blue")}>Blue</button>
    </div>
);
}
export default Webpage;
