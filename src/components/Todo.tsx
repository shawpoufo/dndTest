import { Grid } from "@mantine/core"
import React, { useState } from "react"
import initialData from "../data"
import Column, { IColumn } from "./Column"
import { ITask } from "./Task"

export interface TodoProps {
  children?:React.ReactNode,
  columns:IColumn[],
  tasks:ITask[]
}
const Todo :Function = ({columns,tasks}:TodoProps ) : React.ReactNode=> {
  const todos = columns.map(column =>{
          const filteredTasks = column.taskIds.map(taskId =>{
            const task = tasks.find(t => t.id === taskId)
            return task ? task : null
          })
        return (
          <Grid.Col key={column.id} span={4}>
            <Column  column={column} tasks={filteredTasks}>

            </Column>
          </Grid.Col>
            
        )
      })

  return <Grid>{todos}</Grid>

}


export default Todo