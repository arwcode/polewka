'use client'

import * as React from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Cross2Icon } from '@radix-ui/react-icons'
import LucideIcon from '@/components/shared/LucideIcon'
import { LucideIcons } from '@/lib/types/enums'

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Viewport>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Viewport
		ref={ref}
		className={cn(
			'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
			className
		)}
		{...props}
	/>
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
	'group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-lg border border-neutral-200 p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full dark:border-neutral-800',
	{
		variants: {
			variant: {
				default:
					'border bg-white text-base-950 dark:bg-base-900 dark:text-base-50',
				success:
					'group border-green-300 bg-zinc-200 text-base-50 dark:border-blue-900 dark:bg-blue-900 dark:text-base-50',
				warning:
					'group border-orange-500 bg-orange-500 text-base-50 dark:border-orange-900 dark:bg-orange-900 dark:text-base-50',
				error: 'group border-red-500 bg-red-500 text-base-50 dark:border-red-900 dark:bg-red-900 dark:text-base-50',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	}
)

const Toast = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
		VariantProps<typeof toastVariants> & { icon?: LucideIcons } // Dodanie props `icon`
>(({ className, variant, icon, ...props }, ref) => {
	return (
		<ToastPrimitives.Root
			ref={ref}
			className={cn(toastVariants({ variant }), className)}
			{...props}
		>
			<div className="flex items-center space-x-4">
				{/* Blok z tytułem i opisem */}
				<div className="flex flex-col space-y-1">{props.children}</div>
				{/* Renderowanie ikony, jeśli została podana */}
				{icon && <LucideIcon className="flex-shrink-0" icon={icon} />}
			</div>
		</ToastPrimitives.Root>
	)
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Action>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Action
		ref={ref}
		className={cn(
			'inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-neutral-200 bg-transparent px-3 text-sm font-medium transition-colors hover:bg-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-neutral-100/40 group-[.destructive]:hover:border-red-500/30 group-[.destructive]:hover:bg-red-500 group-[.destructive]:hover:text-neutral-50 group-[.destructive]:focus:ring-red-500 dark:border-neutral-800 dark:hover:bg-neutral-800 dark:focus:ring-neutral-300 dark:group-[.destructive]:border-neutral-800/40 dark:group-[.destructive]:hover:border-red-900/30 dark:group-[.destructive]:hover:bg-red-900 dark:group-[.destructive]:hover:text-neutral-50 dark:group-[.destructive]:focus:ring-red-900',
			className
		)}
		{...props}
	/>
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Close>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Close
		ref={ref}
		className={cn(
			'absolute right-1 top-1 rounded-md p-1 text-neutral-950/50 opacity-0 transition-opacity hover:text-neutral-950 focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:text-neutral-50/50 dark:hover:text-neutral-50',
			className
		)}
		toast-close=""
		{...props}
	>
		<Cross2Icon className="h-4 w-4" />
	</ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Title>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Title
		ref={ref}
		className={cn('text-sm font-semibold [&+div]:text-xs', className)}
		{...props}
	/>
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Description>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Description
		ref={ref}
		className={cn('text-sm opacity-90', className)}
		{...props}
	/>
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
	type ToastProps,
	type ToastActionElement,
	ToastProvider,
	ToastViewport,
	Toast,
	ToastTitle,
	ToastDescription,
	ToastClose,
	ToastAction,
}

// "use client"

// import * as React from "react"
// import * as ToastPrimitives from "@radix-ui/react-toast"
// import { cva, type VariantProps } from "class-variance-authority"
// import { cn } from "@/lib/utils"
// import { Cross2Icon } from "@radix-ui/react-icons"
// import { ArrowRight } from "lucide-react"

// const ToastProvider = ToastPrimitives.Provider

// const ToastViewport = React.forwardRef<
//   React.ElementRef<typeof ToastPrimitives.Viewport>,
//   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
// >(({ className, ...props }, ref) => (
//   <ToastPrimitives.Viewport
//     ref={ref}
//     className={cn(
//       "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
//       className
//     )}
//     {...props}
//   />
// ))
// ToastViewport.displayName = ToastPrimitives.Viewport.displayName

// const toastVariants = cva(
//   "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-lg border border-neutral-200 p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full dark:border-neutral-800",
//   {
//     variants: {
// 			variant: {
// 				default:
// 					'border bg-white text-base-950 dark:bg-base-900 dark:text-base-50',
// 				success:
// 					'group border-green-300 bg-zinc-200 text-base-50 dark:border-blue-900 dark:bg-blue-900 dark:text-base-50',
// 				warning:
// 					'group border-orange-500 bg-orange-500 text-base-50 dark:border-orange-900 dark:bg-orange-900 dark:text-base-50',
// 				error:
// 					'group border-red-500 bg-red-500 text-base-50 dark:border-red-900 dark:bg-red-900 dark:text-base-50',
// 			},
// 		},
//     defaultVariants: {
//       variant: "default",
//     },
//   }
// )

// const Toast = React.forwardRef<
//   React.ElementRef<typeof ToastPrimitives.Root>,
//   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
//     VariantProps<typeof toastVariants>
// >(({ className, variant, ...props }, ref) => {
//   return (
//     <ToastPrimitives.Root
//       ref={ref}
//       className={cn(toastVariants({ variant }), className)}
//       {...props}
//     />
//   )
// })
// Toast.displayName = ToastPrimitives.Root.displayName

// const ToastAction = React.forwardRef<
//   React.ElementRef<typeof ToastPrimitives.Action>,
//   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
// >(({ className, ...props }, ref) => (
//   <ToastPrimitives.Action
//     ref={ref}
//     className={cn(
//       "inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-neutral-200 bg-transparent px-3 text-sm font-medium transition-colors hover:bg-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-neutral-100/40 group-[.destructive]:hover:border-red-500/30 group-[.destructive]:hover:bg-red-500 group-[.destructive]:hover:text-neutral-50 group-[.destructive]:focus:ring-red-500 dark:border-neutral-800 dark:hover:bg-neutral-800 dark:focus:ring-neutral-300 dark:group-[.destructive]:border-neutral-800/40 dark:group-[.destructive]:hover:border-red-900/30 dark:group-[.destructive]:hover:bg-red-900 dark:group-[.destructive]:hover:text-neutral-50 dark:group-[.destructive]:focus:ring-red-900",
//       className
//     )}
//     {...props}
//   />
// ))
// ToastAction.displayName = ToastPrimitives.Action.displayName

// const ToastClose = React.forwardRef<
//   React.ElementRef<typeof ToastPrimitives.Close>,
//   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
// >(({ className, ...props }, ref) => (
//   <ToastPrimitives.Close
//     ref={ref}
//     className={cn(
//       "absolute right-1 top-1 rounded-md p-1 text-neutral-950/50 opacity-0 transition-opacity hover:text-neutral-950 focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:text-neutral-50/50 dark:hover:text-neutral-50",
//       className
//     )}
//     toast-close=""
//     {...props}
//   >
//     <Cross2Icon className="h-4 w-4" />
//   </ToastPrimitives.Close>
// ))
// ToastClose.displayName = ToastPrimitives.Close.displayName

// const ToastTitle = React.forwardRef<
//   React.ElementRef<typeof ToastPrimitives.Title>,
//   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
// >(({ className, ...props }, ref) => (
//   <ToastPrimitives.Title
//     ref={ref}
//     className={cn("text-sm font-semibold [&+div]:text-xs", className)}
//     {...props}
//   />
// ))
// ToastTitle.displayName = ToastPrimitives.Title.displayName

// const ToastDescription = React.forwardRef<
//   React.ElementRef<typeof ToastPrimitives.Description>,
//   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
// >(({ className, ...props }, ref) => (
//   <ToastPrimitives.Description
//     ref={ref}
//     className={cn("text-sm opacity-90", className)}
//     {...props}
//   />
// ))
// ToastDescription.displayName = ToastPrimitives.Description.displayName

// type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

// type ToastActionElement = React.ReactElement<typeof ToastAction>

// export {
//   type ToastProps,
//   type ToastActionElement,
//   ToastProvider,
//   ToastViewport,
//   Toast,
//   ToastTitle,
//   ToastDescription,
//   ToastClose,
//   ToastAction,
// }