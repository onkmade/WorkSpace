import {
    IconSelect,
    IconCircleDashed,
    IconProgress,
    IconProgressCheck
} from '@tabler/icons-react'


export const SelectItems = [
    {
        id: 1, 
        value: 'todo',       
        label: 'To-do',       
        icon: IconCircleDashed,   
        color: '#ff6464'
    },

    {
        id: 2, 
        value: 'inprogress', 
        label: 'In-Progress', 
        icon: IconProgress,       
        color: '#ff7f08'
    },
    
    {
        id: 3, 
        value: 'completed',  
        label: 'Completed',   
        icon: IconProgressCheck,  
        color: '#17afff'
    }
]