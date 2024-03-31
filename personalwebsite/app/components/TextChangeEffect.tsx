import classNames from 'classnames';
import React from 'react'
const TextChangeEffect = () => {
    const words = ["creating user-interface.", "building cool projects.", "exploring new technologies."];

    return (
        <div className=' overflow-hidden h-[50px]  '>{words.map((item, i) => (
            <div key={i} className={classNames(i == 0 && ("animate-text-swap-animation "))} ><div className={classNames('h-[2.81rem] mb-[2.81rem] inline-block text-accent  px-[0.25rem] py-[0.80rem]',)} >{item}</div></div>
        ))}</div>
    )
}

export default TextChangeEffect