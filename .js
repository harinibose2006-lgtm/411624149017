import { useState } from "react";
function CharacterCount() {
    const [text, setText] = useState("");
    function handleChange(event) {
    setText(event.target.value);
    }
    return (
    <div>
    <h2>Character Counter</h2>
    <input
        type="text"
        placeholder="Enter something"
        value={text}
        onChange={handleChange}
    />
    <h3>Character Count: {text.length}</h3>
    {text.length < 2 && (
        <p>Enter some more characters</p>
    )}
    </div>
    );
}

export default CharacterCount;