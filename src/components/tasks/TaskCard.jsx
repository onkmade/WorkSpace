import { Tag } from "../ui/Tags"
import { IconDotsVertical } from '@tabler/icons-react';
import { motion } from 'motion/react'

export default function TaskCard({task}){
    return(
        <motion.article 
            className="w-full outline outline-offset-1 outline-stone-500/30 bg-[#191616] bg-[repeating-linear-gradient(-45deg,transparent,transparent_6px,rgb(255_255_255/0.05)_4px,rgb(255_255_255/0.05)_7px)] rounded-md space-y-2 break-inside-avoid mb-2 px-1 pb-1 pt-1"
            initial={{ opacity: 0, y:10 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ duration: 0.55, ease: 'easeInOut'}}
        >
            <div className="flex items-center justify-between mb-0">
                <h1 className="px-2 py-1 font-semibold text-stone-100/80">{task.title}</h1>
                <div className="flex items-center">
                    {task.status
                        ? <Tag className={'m-2 opacity-80'} variant={'complete'}>Complete</Tag>
                        : <Tag className={'m-2 opacity-80'} variant={'incomplete'}>Incomplete</Tag>
                    }
                    <IconDotsVertical size={20} stroke={2} className="cursor-pointer" />
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