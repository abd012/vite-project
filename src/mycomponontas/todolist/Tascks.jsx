import React from 'react'



export default function tascks(props) {
    return (
        <div >
            <input className={props.isdone ? "done": ""} type="text"  readOnly value={props.txt} /><input className='c' type="button" value="supprimer" onClick={props.del} />
            <input className='b' type="button" value="Done" onClick={props.don} />
        </div>
    )
}

