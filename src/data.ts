const initialData = {
    tasks : [
        {
            id:'t1',
            content:'t1 content'
        },
        {
            id:'t2',
            content:'t2 content'
        },
        {
            id:'t3',
            content:'t3 content'
        },{
            id:'t4',
            content:'t4 content'
        }
    ],
    columns: [
        {
            id:'todo',
            title:'To Do',
            taskIds:['t1','t2','t3']
        },
        {
            id:'achive',
            title:'Achivied',
            taskIds:['t4']
        }
    ],
    columnsOrder :['todo']
}
export default initialData