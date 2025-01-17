import CompanyName from '@/components/content/CompanyName'
import CustomButton from '@/components/shared/CustomButton'

export default function Start() {
	return (
		<section className="w-full dp:flex">
			{/* DESKTOP */}
			<div className="hidden dp:flex dp:flex-col dp:justify-center dp:items-end dp:w-1/2 dp:bg-backgroundDark dp:p-8">
				<div className="hidden dp:text-textDark dp:flex dp:flex-col dp:text-right">
					<p className="text-[30px] xl:text-[45px]">P.S Odlew</p>
					<p className="text-[65px] xl:text-[105px] leading-[75px] xl:leading-[110px]">
						Odlewnia Artystyczna
					</p>
				</div>
				<CustomButton
					navlink
					path="/realizacje"
					className="mt-16"
				>
					Zobacz realizacje
				</CustomButton>
			</div>

			{/* MOBILE */}
			<div
				id="home"
				className="h-customScreen p-5 dp:px-10 pb-28 flex flex-col justify-end dp:w-1/2 dp:justify-end dp:items-start gap-4 homepage-background scroll-mt-header"
			>
				<CompanyName mode="light" className="dp:hidden" />
				<CustomButton navlink path="/realizacje" className="dp:hidden">
					Zobacz realizacje
				</CustomButton>
			</div>
		</section>
	)
}
