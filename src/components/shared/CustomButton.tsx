'use client'
// modules
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type CustomButtonProps = {
	children: React.ReactNode
	onClick?: () => void
	navlink?: boolean
	path?: string
	className?: string
	disabled?: boolean
}

export default function CustomButton({
	children,
	onClick,
	navlink,
	path,
	className,
	disabled=false,
}: CustomButtonProps) {
	const buttonClasses =
		'bg-accent text-md text-textLight w-full rounded-l-full rounded-br-full py-6 hover:bg-accentHover'

	if (navlink && path) {
		return (
			<div
				className={cn(
					'h-0 flex justify-center items-center',
					buttonClasses,
					className
				)}
			>
				<Link href={path} {...(onClick && { onClick: onClick })}>
					{children}
				</Link>
			</div>
		)
	}

	return (
		<Button onClick={onClick} className={cn(buttonClasses, className)} disabled={disabled}>
			{children}
		</Button>
	)
}
