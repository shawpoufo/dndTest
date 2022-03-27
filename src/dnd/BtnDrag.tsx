import { Button } from "@mantine/core"
import { Draggable} from "react-beautiful-dnd"
export default ()=>(
    <Draggable draggableId="btn-drag" index={0}>
        {
            (provided,snapshot)=> (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <Button>hi</Button>
                </div>
            )
        }
    </Draggable>
)