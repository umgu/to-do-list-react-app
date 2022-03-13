import React, { useState } from "react";

function List(props) {
    const [editable, setEditable] = useState(false);
    const [text, setText] = useState(props.title);
    return (
        <tr>
            <td style={{ textAlign: "center" }}>{props.index + 1}</td>
            {editable ? (
                <td>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </td>
            ) : (
                <td>{text}</td>
            )}
            <td style={{ textAlign: "center" }}>
                {editable ? (
                    <button
                        onClick={() => {
                            props.updateAction(props.index, text);
                            setEditable(false);
                        }}
                    >Save</button>) : (
                    <button onClick={() => {
                        setEditable(true);
                    }}
                    >Edit</button>
                )}
                <button
                    onClick={() =>{
                        props.deleteAction(props.index);
                    }}
                >Remove</button>
            </td>
        </tr>
    );
}

export default List;


