import Button from "./Button";

export default function Tasks({tasks}){
    return(
        tasks.map( task => <Card task={task}/>)
    );
}

function Card({task}){
    return(
        <article key={task.id} className="bg-stone-800 p-2 rounded-lg grid gap-2">
            <h1 className="text-xl font-semibold">{task.title}</h1>
            <p className="opacity-60 text-sm pt-4">{task.description}</p>
            <Button variant="secondary" size="sm" className={'ml-auto'}>Edit</Button>
        </article>
    )
}