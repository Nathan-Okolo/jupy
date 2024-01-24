import { cn } from '#/lib/utils';
import { FC, ReactNode } from 'react';

interface ContainerProps {
	className?: string;
	children: ReactNode;
}

const Container: FC<ContainerProps> = ({ className, children, ...props }) => {
	return (
		<div
			className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
			{...props}
		>
			{children}
		</div>
	);
};

export default Container;
