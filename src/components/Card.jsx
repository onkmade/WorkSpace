export default function Tasks({tasks}){
    return(
        tasks.map( task => <Card task={task}/>)
    );
}

function Card({task}){
    return(
        <article key={task.id} className="bg-stone-800 p-1 rounded-sm w-95">
            <h1 className="text-xl">{task.title}</h1>
            <p className="opacity-60">{task.description}</p>
        </article>
    )
}