import { cn } from '@/lib/utils'

export default function TextContent({
	children,
  className,
}: {
	children: React.ReactNode
  className?: string
}) {
	return (
		<div className={cn('text-justify text-textDark', className)}>
			{children}
		</div>
	)
}
