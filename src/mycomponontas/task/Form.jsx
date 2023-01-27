import React from 'react'

export default function Form() {
    const[qte,setQte]= useState("");

  return (
    <div>
entre une qte:
<input type="text" value={qte} onChange={(e)=>setQte(e.target.value)}/>
<input type="button" />
<input type="button" />
    </div>

  )
}
