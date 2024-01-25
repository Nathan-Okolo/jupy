/* eslint-disable @next/next/no-img-element */
import { Metadata } from 'next';
import NavBar from '#/components/shared/NavBar';
import Image from 'next/image';

export const metadata: Metadata = {
	title: 'Home ~ Jupy',
	description: 'Jupy'
};

const Home = () => {
	return (
		<>
			<div id="home" className='flex flex-col hero-background pb-8'>
				<NavBar />
				<div className='flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-start gap-x-16 gap-y-8 flex-1 px-6 lg:px-[12rem]'>
					<p className='text-white text-3xl text-center mb-16 lg:text-left lg:mb-0'>Jupiter&apos;s Coolest cat on a journey to <span className='text-[#B6D7FF]'>meme-tastic</span> riches. <br /><br /><span className='font-bold'>$JUPY</span> fuels the interstellar meme-ventures of a cosmic cat and his community.</p>
					<Image
						src='/images/hero-avatar.png'
						width={500}
						height={500}
						alt='Jupy'
						className='w-60 h-60 lg:w-80 lg:h-80'
					/>
				</div>
			</div>

			{/* Mid Section */}
			<section id="tokenomics" className='relative mid-background py-16'>
				<Image
					src='/images/space-shuttle.png'
					width={50}
					height={72}
					alt='Jupy'
					className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
				/>
				<p className='text-white mb-4 text-xl text-center'>Buckle up, space cadets, and blast off <br /> with <span className='font-bold'>$JUPY</span>!</p>
				<img src='/images/jupynomics.png' alt='Jupynomics' className='h-8 w-auto mx-auto mb-6' />

				<div className='flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-x-16 gap-y-8 flex-1 px-6 lg:px-[12rem]'>
					<div className='flex-1 lg:ml-auto'>
						<Image
							src='/images/chart.png'
							width={500}
							height={500}
							alt='Chart'
						/>
					</div>
					<div className='text-white flex flex-col gap-y-2 flex-1 mb-16 lg:mb-0'>
						<p className='text-3xl mb-2'>Total Supply: <span className='font-bold'>10bn $JUPY</span></p>

						<div className='flex flex-row gap-x-4 items-center'>
							<div className='w-6 h-6 bg-[#5971C0]'></div>
							<p className='text-2xl'>Airdrop (Early Cadets)</p>
						</div>
						<div className='flex flex-row gap-x-4 items-center'>
							<div className='w-6 h-6 bg-[#9EC97F]'></div>
							<p className='text-2xl'>Liquidity</p>
						</div>
						<div className='flex flex-row gap-x-4 items-center'>
							<div className='w-6 h-6 bg-[#F3C96B]'></div>
							<p className='text-2xl'>Growth</p>
						</div>
						<div className='flex flex-row gap-x-4 items-center'>
							<div className='w-6 h-6 bg-[#DE6E6A]'></div>
							<p className='text-2xl'>Contributors</p>
						</div>
					</div>
				</div>
			</section>

			{/* Footer Section */}
			<section id="action" className='relative footer-background py-16'>
				<Image
					src='/images/arrow.png'
					width={26}
					height={72}
					alt='Jupy'
					className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
				/>
				<img src='/images/action.png' alt='Call to Action' className='h-6 w-auto mx-auto mb-6' />

				<div className='text-white flex flex-col gap-y-4 mt-20 mx-auto w-2/3'>
					<a href="https://puzzel.org/en/jigsaw/play?p=-NoqJyNhAtkPyfh-9a3J" target="_blank" rel="noopener noreferrer">
						<button className='flex flex-row gap-x-4 items-center'>
							<Image
								src='/images/puzzle.png'
								width={44}
								height={44}
								alt='...'
								className='w-11 h-11 flex-shrink-0 object-contain'
							/>
							<p className='text-2xl text-left'><span className='font-bold'>Become an early Cadet</span>: Solve the Puzzle to quality for the $JUPY drop</p> <br />
							<button className='flex flex-row gap-x-4 items-center bg-gray-500 py-2 px-4 rounded-md'>
								PLAY NOW
							</button>
						</button>
					</a>
					<div className='h-0.5 ml-[60px] bg-white'></div>
					<a href="http://" target="_blank" rel="noopener noreferrer">
						<div className='flex flex-row gap-x-4 items-center'>
							<Image
								src='/images/swap.png'
								width={44}
								height={44}
								alt='...'
								className='w-11 h-11 flex-shrink-0 object-contain'
							/>
							<p className='text-2xl text-left'><span className='font-bold'>Buy $JUPY</span>: On your favourite exchange after token launch</p>
						</div>
					</a>
					<div className='h-0.5 ml-[60px] bg-white'></div>
					<div className='flex flex-row gap-x-4 items-center'>
						<Image
							src='/images/x.png'
							width={44}
							height={44}
							alt='...'
							className='w-11 h-11 flex-shrink-0 object-contain'
						/>
						<p className='text-2xl text-left'><span className='font-bold'>Socials</span>: Follow us on Twitter and join our community for the latest Jupy news and memes!</p>
					</div>
					<div className='h-0.5 ml-[60px] bg-white'></div>

				</div>
				{/* Logos Section */}
				<div className="flex justify-center mt-6">
					{/* Add your three logos here */}
					<a href="https://puzzel.org/en/jigsaw/play?p=-NoqJyNhAtkPyfh-9a3J" target="_blank" rel="noopener noreferrer">
						<Image
							src='/images/puzzle.png'  // Replace with the path to your first logo
							width={44}
							height={44}
							alt='...'
							className='w-8 h-8 flex-shrink-0 object-contain mx-2'
						/>
					</a>
					<a href="https://x.com/jupythecat" target="_blank" rel="noopener noreferrer">
						<Image
							src='/images/x.png'  // Replace with the path to your second logo
							width={44}
							height={44}
							alt='...'
							className='w-8 h-8 flex-shrink-0 object-contain mx-2'
						/>
					</a>
					<a href="https://t.me/Jupycadets" target="_blank" rel="noopener noreferrer">
						<Image
							src='/images/telegram.png'  // Replace with the path to your third logo
							width={44}
							height={44}
							alt='...'
							className='w-8 h-8 flex-shrink-0 object-contain mx-2'
						/>
					</a>
				</div>
			</section>

		</>
	);
};

export default Home;
