import React from "react";
import { Droppable } from "react-beautiful-dnd";

const DropRow: React.FC<{}> = ({children}) =>(
    <Droppable droppableId="droppable-1" type="PERSON">
    {(provided, snapshot) => (
        <div
        ref={provided.innerRef}
        style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
        {...provided.droppableProps}
        >
        <h2>I am a droppable!</h2>
        
        
        </div>
    )}
    </Droppable>
)

export default DropRow