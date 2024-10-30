'use client'

//components
import CompanyName from '@/components/content/CompanyName'
import CustomButton from '@/components/shared/CustomButton'

export default function HomePage() {
	return (
		<div className="flex flex-col">
			<section
				id="home"
				className="h-customScreen p-5 pb-28 flex flex-col justify-end gap-4 homepage-background scroll-mt-header"
			>
				<CompanyName mode="light" className="h-auto" />
				<CustomButton navlink path="/realizacje">
					Zobacz realizacje
				</CustomButton>
			</section>
			<section id="o-nas" className="h-[200px] scroll-mt-header">
				ABOUT
			</section>
			<section id="oferta" className="h-[200px] scroll-mt-header">
				OFFER
			</section>
			<section id="realizacje" className="h-[200px] scroll-mt-header">
				REALIZATIONS
			</section>
			<section id="kontakt" className="h-[200px] scroll-mt-header">
				CONTACT
			</section>
		</div>
	)
}
