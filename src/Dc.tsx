import { Button } from "@mantine/core"
import { useState } from "react"
import { useDrop } from "react-dnd"
import Fc from "./Fc"



const Dc = ({children}:{children:React.ReactNode})=>{
    const [tt,setTT] =useState<String | null>(null)
    const [{isOver},drop]=useDrop({
        accept:"D",
        drop:({type,title,id}:{type:String,title:String,id:Number},monitor) => {
            setTT(type)
        },
        hover:()
        ,
        collect:(monitor)=>({
            isOver:!!monitor.canDrop()
        })
    })

    return (
        <div ref={drop} style={{backgroundColor : isOver ? "yellow":"black"}}>
            {children}
            {tt === "D" ? <Fc title="hi" children={<Button>Drag</Button>}/>:null}
        </div>
    )
}

export default Dc