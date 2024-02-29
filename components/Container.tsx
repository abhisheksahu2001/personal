import classNames from "classnames";

interface IContainer {
    children:React.ReactNode;
    classname?:string;
}


const Container:React.FC<IContainer> = ({children , classname}) => {
    return <div className={classNames("w-full h-full p-1 " , classname )} >{children}</div>
}

export default Container;