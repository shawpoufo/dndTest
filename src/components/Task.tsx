import { List, Text } from "@mantine/core"
import { Draggable } from "react-beautiful-dnd"

export interface ITask{
    id: string
    content: string
}

export interface TaskProps extends ITask{
    index:number
}

const Task :Function =({id,content,index}:TaskProps):React.ReactNode=>{
    const style : React.CSSProperties ={border:'1px solid',borderRadius:"2px",padding:"2.5px",marginBottom:"8px",
            backgroundColor:"white"    
            }
    return (
        <Draggable draggableId={id} index={index}>
            {      
                (provided)=>
                
                <div ref={provided.innerRef}
                    
                    {...provided.dragHandleProps}       
                    {...provided.draggableProps}
                >
                    <div style={style}>
                        <Text>
                            {content}
                        </Text>
                    </div>
                        
                    
                        
                </div>
                
            }
        </Draggable>
        
        
    )
}

export default Task