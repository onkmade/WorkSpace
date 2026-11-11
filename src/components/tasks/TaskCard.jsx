import { IconDotsVertical, IconEdit, IconTrash } from '@tabler/icons-react';
import { motion } from 'motion/react'
import { useContext, useEffect, useRef, useState } from 'react';
import { ModalContext } from '@/context/ModalContext';
import { TasksContext } from '@/context/TasksContext';
import { TaskCardStatus } from './TaskCardStatus';

export default function TaskCard({task}){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const { setIsModalOpen } = useContext(ModalContext);
    const { setTasks, setEditingTask } = useContext(TasksContext);

    useEffect(() => {
        if (!isMenuOpen) return;

        function handlePointerDown(event) {
            if (!menuRef.current?.contains(event.target)) {
                setIsMenuOpen(false);
            }
        }

        function handleKeyDown(event) {
            if (event.key === "Escape") setIsMenuOpen(false);
        }

        document.addEventListener("pointerdown", handlePointerDown);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("pointerdown", handlePointerDown);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isMenuOpen]);

    function handleEdit() {
        setEditingTask(task);
        setIsModalOpen(true);
        setIsMenuOpen(false);
    }

    function handleDelete() {
        setTasks((currentTasks) => currentTasks.filter((item) => item.id !== task.id));
        setIsMenuOpen(false);
    }

    return(
        <motion.article 
            className="w-full outline outline-offset-1 outline-stone-500/30 bg-[#191616] bg-[repeating-linear-gradient(-45deg,transparent,transparent_6px,rgb(255_255_255/0.05)_4px,rgb(255_255_255/0.05)_7px)] rounded-md space-y-2 break-inside-avoid px-1 pb-1 pt-1"
            initial={{ opacity: 0, y:10 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ duration: 0.55, ease: 'easeInOut'}}
        >
            <div className="flex items-center justify-between mb-0">
                <h2 className="px-2 py-1 mb-1 font-semibold text-stone-100/80">{task.title}</h2>
                <div className="flex items-center gap-1">
                    <TaskCardStatus key={task.id} task={task}/>
                    <div ref={menuRef} className="relative">
                        <button
                            type="button"
                            aria-label={`Actions for ${task.title}`}
                            aria-expanded={isMenuOpen}
                            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
                            className="flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-sm p-0 text-stone-400 hover:bg-stone-700 hover:text-stone-100"
                        >
                            <IconDotsVertical size={20} stroke={2} />
                        </button>
                        {isMenuOpen && (
                            <div
                                role="menu"
                                className="absolute right-0 top-full z-20 mt-1 grid min-w-36 gap-0.5 rounded-lg border border-stone-700 bg-stone-800 p-1.5 shadow-xl shadow-black/40"
                            >
                                <button
                                    type="button"
                                    role="menuitem"
                                    onClick={handleEdit}
                                    className="flex items-center gap-2 rounded-md px-2.5 py-2 text-left text-sm text-stone-200 transition-colors hover:bg-stone-700 hover:text-stone-50"
                                >
                                    <IconEdit size={16} stroke={1.7} />
                                    Edit
                                </button>
                                <button
                                    type="button"
                                    role="menuitem"
                                    onClick={handleDelete}
                                    className="flex items-center gap-2 rounded-md px-2.5 py-2 text-left text-sm text-red-300 transition-colors hover:bg-red-950/60 hover:text-red-200"
                                >
                                    <IconTrash size={16} stroke={1.7} />
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="bg-[#252424] rounded-sm">
                <p className="text-sm p-2 opacity-50 hover:opacity-85 transition-all duration-300">
                    {task.description.length > 100 
                        ? task.description.slice(0,150) + '...'
                        : task.description
                    }
                </p>
            </div>
        </motion.article>
    )
}