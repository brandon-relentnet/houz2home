export default function OurMission() {
	return (
		<section className="flex flex-col lg:flex-row items-stretch justify-center gap-10 lg:gap-6 py-12 px-4 md:px-8 lg:px-16 mb-12 lg:mb-28">
			<div className="lg:w-1/2 flex flex-col justify-center text-left">
				<h3 className="mb-4 ml-2">
					Redefining homes, <span className="italic">enriching</span> lives.
				</h3>
				<p className="section-container">
					At the core of our purpose lies a passion for recreating spaces into
					havens of comfort, beauty, and inspiration. We don&apos;t merely
					renovate structures &mdash; we shape personalized environments that
					embody the dreams and aspirations of the families who inhabit them.
					Through collaboration, innovation, and unmatched craftsmanship, our
					mission is to transform each corner of your home into a reflection of
					who you are, fostering joy and harmony in everyday life.
				</p>
			</div>
			<div className="lg:w-1/2 flex justify-center items-center">
				<img
					src="/images/webp/h2h_mission.webp"
					alt="Houz2Home mission — renovated living space"
					className="rounded-lg shadow-lg w-full h-auto"
					width={2560}
					height={3413}
				/>
			</div>
		</section>
	);
}
