import classnames from "classnames";

interface IText {
    content:string;
    size?:"2xl" | "xl" | "lg" | "md" | "sm" ;
    classname?:string;
}

const TextContent:React.FC<IText> = ({size ,  content , classname }) => {
    switch(size){
        case "2xl":
            return <h2 className={classnames( 'text-2xl' ,classname)}>{content}</h2>;
        case "xl":
            return <h3 className={classnames( 'text-xl' ,classname)}>{content}</h3>;
        case "lg":
            return <h4 className={classnames( 'text-lg' ,classname)}>{content}</h4>;
        case "md":
            return <h5 className={classnames( 'text-md' ,classname)}>{content}</h5>;
        case "sm":
            return <p className={classnames( 'text-sm' ,classname)}>{content}</p>;
        default:
            return <p className={classnames( 'text-xs' ,classname)}>{content}</p>;
    }
}
export default TextContent;