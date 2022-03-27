import { Container, List } from "@mantine/core"
import { Droppable } from "react-beautiful-dnd"
import Task, { ITask } from "./Task"

export interface IColumn{
    id: string
    title: string
    taskIds: string[]
}


export interface ColumnProps{
    children:React.ReactNode,
    column:IColumn,
    tasks:(ITask | null)[] 
}

const ColumnFC = ({column,tasks,children}:ColumnProps) => {
    const style : React.CSSProperties = {
        border: "1px solid",
        borderRadius:"2px"
        
    }
    return (
        <Droppable droppableId={column.id}>
            {
                (provided)=>(
                    <Container style={{...style}}
                        ref={provided.innerRef}
                        {...provided.droppableProps}>

                        <h3>{column.title}</h3>
                        {
                        tasks.map((task,index) => 
                            
                                <Task key={`t-${task?.id}`}  {...{...task,index}} />
                            )
                        }
                        {provided.placeholder}
                    </Container>
                )
            }
        </Droppable>
    
    )
}

export default ColumnFC