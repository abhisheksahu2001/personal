import classNames from "classnames"
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

interface IMainHeading {
    size?: 'sm' | 'xs' | 'md' | '2xl' | 'lg' | 'xl';
    style?: {};
    content?: string;
    className: string;
    font: NextFontWithVariable;
    children?: React.ReactNode;
}

export const MainText: React.FC<IMainHeading> = ({ content, className, children, style ,size }) => {
    return <h1 style={style} className={classNames(className, 'capitalize',   size === '2xl' && 'text-2xl',
    size === 'sm' && 'text-sm',
    size === 'xs' && 'text-xs',
    size === 'lg' && 'text-lg',
    size === 'xl' && 'text-xl',
    size === 'md' && 'text-md', 'font-extrabold', "font-inter")} >{children}</h1>
}
export const SpecialText: React.FC<IMainHeading> = ({ content, className, children, style, size = '2xl' }) => {
    return <h3 style={style} className={classNames(className, 'capitalize',
        size === '2xl' && 'text-2xl',
        size === 'xs' && 'text-xs',
        size === 'sm' && 'text-sm',
        size === 'md' && 'text-md',
        " font-Koulen")} >{children}</h3>
}
export const ParagraphText: React.FC<IMainHeading> = ({ content, className, children, style, size, font }) => {
    return <p style={style} className={classNames(className, 'capitalize', size === '2xl' && 'text-2xl',
        size === 'xs' && 'text-xs',
        size === 'sm' && 'text-sm',
        size === 'md' && 'text-md', font.className)} >{children}</p>
}
export const HighlightText: React.FC<IMainHeading> = ({ className, children, style }) => {
    return <p style={style} className={classNames(className, 'capitalize', 'font-medium', "font-inter")} >{children}</p>
}