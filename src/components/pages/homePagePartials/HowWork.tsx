'use client'
// modules
import { useState } from 'react'
// lib
import { cn } from '@/lib/utils'
import { HowWorkContent } from '@/lib/constants/texts'
// components
import Title from '@/components/shared/Title'

export default function HowWork() {
	const [activContentIndex, setActiveContentIndex] = useState<number>(0)

	return (
		<div id="tabs" className="min-h-customScreen mb-4">
			<Title className="mb-6 px-5">
				<p>Jak pracujemy?</p>
			</Title>
			<menu className="w-full px-5 pb-10 flex flex-col items-center text-textDark">
				<button
					onClick={() => setActiveContentIndex(0)}
					className={cn(
						'relative w-full py-2 px-4 rounded-l-full rounded-br-full border-2 border-accent text-center',
						activContentIndex === 0 ? 'bg-accent text-textLight' : ''
					)}
				>
					<p>Kontakt z klientem</p>
					<div className="h-full aspect-square absolute flex justify-center items-center rounded-full top-0 left-0 bg-accent text-textLight">
						1
					</div>
				</button>
				<div className="w-[2px] h-[30px] bg-accent" />

				<button
					onClick={() => setActiveContentIndex(1)}
					className={cn(
						'relative w-full py-2 px-4 rounded-l-full rounded-br-full border-2 border-accent text-center',
						activContentIndex === 1 ? 'bg-accent text-textLight' : ''
					)}
				>
					<p>Tworzenie projektu</p>
					<div className="h-full aspect-square absolute flex justify-center items-center rounded-full top-0 left-0 bg-accent text-textLight">
						2
					</div>
				</button>
				<div className="w-[2px] h-[30px] bg-accent" />

				<button
					onClick={() => setActiveContentIndex(2)}
					className={cn(
						'relative w-full py-2 px-4 rounded-l-full rounded-br-full border-2 border-accent text-center',
						activContentIndex === 2 ? 'bg-accent text-textLight' : ''
					)}
				>
					<p>Realizacja projektu</p>
					<div className="h-full aspect-square absolute flex justify-center items-center rounded-full top-0 left-0 bg-accent text-textLight">
						3
					</div>
				</button>
				<div className="w-[2px] h-[30px] bg-accent" />

				<button
					onClick={() => setActiveContentIndex(3)}
					className={cn(
						'relative w-full py-2 px-4 rounded-l-full rounded-br-full border-2 border-accent text-center',
						activContentIndex === 3 ? 'bg-accent text-textLight' : ''
					)}
				>
					<p>Odbiór realizacji</p>
					<div className="h-full aspect-square absolute flex justify-center items-center rounded-full top-0 left-0 bg-accent text-textLight">
						4
					</div>
				</button>
			</menu>
			<div id="tab-content" className="w-full min-h-[200px] bg-mottoBg px-5 py-8">
					<p className='text-justify'>{HowWorkContent[activContentIndex]}</p>
			</div>
		</div>
	)
}
