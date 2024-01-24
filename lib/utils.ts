import { toast } from 'react-toastify';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export const formatNumberWithCommas = (number: number) => {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
