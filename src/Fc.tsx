import { useDrag } from "react-dnd"

export interface Props{
    children:React.ReactNode
    title:String
}

const Fc = ({children,title}:Props)=>{
        const [{isDragging,xyOffset},drag,dragPreview]=useDrag({
            type:"D",
            item:{
                type:"D",
                id:0,
                title
            },
            collect: monitor => ({
                isDragging : !!monitor.isDragging(),
                xyOffset:monitor.getDifferenceFromInitialOffset()
            })
            
        })
        console.log(xyOffset)
    return isDragging ? (
        
        
        null
    ):(
        <div ref={drag} style={{backgroundColor: isDragging ? "red":"blue" , opacity: isDragging ? 0.2 : 1}}>
            {title}
            {children}
        </div>
    )
}

export default Fc