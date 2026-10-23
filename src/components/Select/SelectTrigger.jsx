export function SelectTrigger({children, onClick}){

    function handleClick(e){
        e.preventDefault();
        onClick();
    }
    
    return(
        <button 
            className="bg-stone-700 py-1 rounded-sm cursor-pointer max-w-35 w-full"
            onClick={handleClick}
        >
            {children}
        </button>
    )
}