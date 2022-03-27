import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button, Container, Grid, Tab } from '@mantine/core'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import Todo from './components/Todo'
import initialData from './data'
import { useImmer } from "use-immer";



function App() {
  const [initData, setData] = useImmer(initialData)

  const onDragEnd = (result:DropResult) =>{
    const {destination,source,draggableId,} = result

    if(!destination) return;

    //does draggable location changed ?
    if( destination.droppableId === source.droppableId &&
        destination.index === source.index)
        return;
    

    


    setData(draft =>{
      const srcColumn = draft.columns.find(c => c.id === source.droppableId)
      const destColumn = draft.columns.find(c => c.id === destination.droppableId)
      if(srcColumn && destColumn){
        const movinTaskId = srcColumn.taskIds[source.index];

        if(srcColumn !== destColumn)
        {
          
          destColumn.taskIds.splice(destination.index,0,movinTaskId)
          srcColumn.taskIds.splice(source.index,1)
        }
        else
        {
          if(destination.index > source.index)
          {
            srcColumn.taskIds.splice(destination.index+1,0,movinTaskId)
            srcColumn.taskIds.splice(source.index,1)
          }
          else{

            srcColumn.taskIds.splice(destination.index,0,movinTaskId)
            srcColumn.taskIds.splice(source.index+1,1)
          }
        }

      }
     })
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
       <Container>
          <Todo columns={initData.columns} tasks={initData.tasks}/>
        </Container>
        
        
    </DragDropContext>
  )
}

export default App
