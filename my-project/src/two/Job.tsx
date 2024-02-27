import { ReactNode } from "react";

export interface JobProps {
    title : string;
    icon : ReactNode;
    bgClass : string;
}

export const Job : React.FC<JobProps> = ({title, icon, bgClass: bgColor}) => {
	return (
		<div className={`${bgColor} p-4 flex justify-center items-center flex-col aspect-square rounded-lg text-ellipsis`}>

        {icon}
        <p className="pt-2 font-serif">{title}</p>

		</div>
	);
}