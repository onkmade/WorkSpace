import { Tag } from "../ui/Tags"

export default function TaskCard({task}){
    return(
        <article className="bg-stone-800 p-2 rounded-sm space-y-2">
            <h1 className="text-2xl font-semibold">{task.title}</h1>
            <p>{task.description}</p>
            {task.status
                ? <Tag variant={'complete'}>Complete</Tag>
                : <span>InComplete</span>
            }
        </article>
    )
}