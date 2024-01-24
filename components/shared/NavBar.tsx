/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link';
import { cn } from '#/lib/utils';
import { FC, Fragment, ReactNode } from 'react';
import Container from '#/components/shared/Container';
import { Popover, Transition } from '@headlessui/react';

const NavLink: FC<{ href: URL | string, children: ReactNode, isMobile?: boolean }> = ({ href, children, isMobile }) => {
	if (isMobile) {
		return (
			<Popover.Button as={Link} href={href} className='block w-full p-2 text-lg text-black hover:text-[#51A1FF]'>
				{children}
			</Popover.Button>
		)
	}

	return (
		<Link
			href={href}
			className='inline-block rounded-lg px-2 py-1 text-lg text-white hover:text-[#51A1FF]'
		>
			{children}
		</Link>
	)
}

const MobileNavIcon: FC<{ open: boolean }> = ({ open }) => {
	return (
		<svg
			aria-hidden='true'
			className='h-3.5 w-3.5 overflow-visible stroke-white'
			fill='none'
			strokeWidth={2}
			strokeLinecap='round'
		>
			<path
				d='M0 1H14M0 7H14M0 13H14'
				className={cn(
					'origin-center transition',
					open && 'scale-90 opacity-0'
				)}
			/>
			<path
				d='M2 2L12 12M12 2L2 12'
				className={cn(
					'origin-center transition',
					!open && 'scale-90 opacity-0'
				)}
			/>
		</svg>
	)
}

const MobileNavigation = () => {
	return (
		<Popover>
			<Popover.Button
				className='relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none'
				aria-label='Toggle Navigation'
			>
				{({ open }) => <MobileNavIcon open={open} />}
			</Popover.Button>
			<Transition.Root>
				<Transition.Child
					as={Fragment}
					enter='duration-150 ease-out'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='duration-150 ease-in'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<Popover.Overlay className='fixed inset-0 bg-slate-300/50' />
				</Transition.Child>
				<Transition.Child
					as={Fragment}
					enter='duration-150 ease-out'
					enterFrom='opacity-0 scale-95'
					enterTo='opacity-100 scale-100'
					leave='duration-100 ease-in'
					leaveFrom='opacity-100 scale-100'
					leaveTo='opacity-0 scale-95'
				>
					<Popover.Panel
						as='div'
						className='absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5'
					>
						<NavLink isMobile href='#home'>Home</NavLink>
						<NavLink isMobile href='#tokenomics'>Tokenomics</NavLink>
						<NavLink isMobile href='#action'>Call to Action</NavLink>
					</Popover.Panel>
				</Transition.Child>
			</Transition.Root>
		</Popover>
	)
}

const NavBar = () => {
	return (
		<header className='py-5'>
			<Container>
				<nav className='relative z-50 flex justify-between'>
					<div className='flex items-center md:gap-x-12'>
						<Link href='/' aria-label='Home'>
							<img src='/images/logo.png' alt='Jupy logo' className='h-6 w-auto' />
						</Link>
					</div>
					<div className='flex items-center gap-x-5 md:gap-x-8'>
						<div className='hidden md:flex md:gap-x-6'>
							<NavLink href='#home'>Home</NavLink>
							<NavLink href='#tokenomics'>Tokenomics</NavLink>
							<NavLink href='#action'>Call to Action</NavLink>
						</div>
						<div className='-mr-1 md:hidden'>
							<MobileNavigation />
						</div>
					</div>
				</nav>
			</Container>
		</header>
	)
}

export default NavBar;
