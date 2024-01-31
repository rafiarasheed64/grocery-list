import React, { useState } from 'react'

const Grocery = () => {
  const [inpValue,setInpValue] = useState('')
  const [list,setList]= useState([])
  const [index,setIndex] = useState(0)
  const [alert1,setAlert1] = useState(false)
  const [alert2,setAlert2] = useState(false)
  const [alert3,setAlert3] = useState(false)
  const [check,setCheck]= useState(false)
  function handleItem (){
    setList([])
    if(inpValue !== ''){
      setList([...list, inpValue])
      setAlert1(true)

      // if(inpValue){
      //   setInpValue("")
      // }

      setTimeout(() => {
        setAlert1(false)
      }, 2000);
    }
    else{
      alert('Enter the item')
    }
    // setInpValue('')
  }
  function DeltAll (){
    setList([])
    setAlert2(true)
    setTimeout(() => {
      setAlert2(false)
    }, 2000);
  }
  function EditLI (ele,idx){
    setIndex(idx)
    setInpValue(ele)
    setCheck(true)
    // setI
  }
  function SaveLI (){
    list[index]=inpValue
    setList([...list])
    setCheck(false)
    setAlert3(true)
    setTimeout(() => {
      setAlert3(false)
    }, 2000);
  }
  function DeltLI(idx){
    let update=[...list]
    console.log(update, 'update value');
    update.splice(idx,1)
    console.log(update.splice(idx,1), 'update value');
    setList(update)

  }
  

  return (
    <div style={{border: '1px solid black',borderRadius: '5px',width:'40%',margin:'auto'}}>
        <h2 style={{textAlign: 'center'}}>GROCERY LIST</h2>
        <input style={{width: '70%',height: '25px'}} type="text" value={inpValue} onChange={(e)=>setInpValue(e.target.value)} />
        <button style={{padding: '7px',cursor: 'pointer',backgroundColor: 'skyblue'}} onClick={handleItem}>Add Item</button>
        <button style={{padding: '7px',cursor: 'pointer',backgroundColor: 'skyblue'}} onClick={DeltAll}>Delete All</button>
        <p>{alert1?'An item has been added':(true)}</p>
        <p>{alert2?'All items have been cleared':(true)}</p>
        <p>{alert3?'An item has been edited and saved':(true)}</p>

        {check?<button onClick={SaveLI}>Save</button>:""}

       {inpValue !== '' ? (
       <ul>
        {list.map((ele, idx) => (
        <li style={{width:'80%',marginTop:'10px',border:'1px solid',padding:'5px',backgroundColor: 'pink', display: 'flex', justifyContent:'space-between'}} key={idx}>
        {ele}
        <div>
        <button onClick={ ()=> DeltLI(idx)}>Delete</button>
        <button onClick={()=> EditLI(ele,idx)}>Edit</button>
        </div>
      </li>
    ))}
  </ul>
) : null}

    </div>
    )
}

export default Grocery