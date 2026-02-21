import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "@/components/Lightbox";
import type { PhotoCategory } from "@/data/portfolioData";
import portfolioPhotos from "@/data/portfolioData";

const categories: { label: string; value: PhotoCategory }[] = [
	{ label: "All", value: "all" },
	{ label: "Kitchen", value: "kitchen" },
	{ label: "Bathroom", value: "bathroom" },
	{ label: "Living Spaces", value: "living" },
	{ label: "Custom Storage", value: "custom" },
];

export default function Portfolio() {
	const [activeCategory, setActiveCategory] = useState<PhotoCategory>("all");
	const [lightboxIndex, setLightboxIndex] = useState(-1);

	const filteredPhotos =
		activeCategory === "all"
			? portfolioPhotos
			: portfolioPhotos.filter((p) => p.category === activeCategory);

	return (
		<section className="px-6 md:px-10 py-24 lg:py-32">
			<div className="max-w-7xl mx-auto">
				<motion.div
					className="mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<span className="label-text">Portfolio</span>
					<h2 className="mt-4">Previous Works</h2>
					<p className="max-w-2xl">
						Explore a selection of our completed projects, showcasing our
						commitment to quality craftsmanship and innovative design across
						kitchens, bathrooms, living spaces, and custom storage solutions.
					</p>
				</motion.div>

				{/* Category filters */}
				<motion.div
					className="flex flex-wrap gap-3 mb-12"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4, delay: 0.1 }}
				>
					{categories.map((cat) => (
						<button
							key={cat.value}
							type="button"
							onClick={() => {
								setActiveCategory(cat.value);
								setLightboxIndex(-1);
							}}
							className={`px-5 py-2.5 text-sm tracking-[0.05em] border transition-all duration-300 ${
								activeCategory === cat.value
									? "bg-gold text-night border-gold font-semibold"
									: "bg-transparent text-warm border-rule hover:border-gold/40 hover:text-cream"
							}`}
						>
							{cat.label}
						</button>
					))}
				</motion.div>

				{/* Gallery */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					<MasonryPhotoAlbum
						photos={filteredPhotos}
						onClick={({ index }) => setLightboxIndex(index)}
					/>
				</motion.div>

				{/* Photo count */}
				<p className="text-center text-mute text-sm mt-8 mb-0">
					Showing {filteredPhotos.length} of {portfolioPhotos.length} projects
				</p>

				{/* Lightbox */}
				<AnimatePresence>
					{lightboxIndex >= 0 && (
						<Lightbox
							key="lightbox"
							photos={filteredPhotos}
							currentIndex={lightboxIndex}
							onClose={() => setLightboxIndex(-1)}
							onPrev={() =>
								setLightboxIndex(
									(i) =>
										(i - 1 + filteredPhotos.length) % filteredPhotos.length,
								)
							}
							onNext={() =>
								setLightboxIndex((i) => (i + 1) % filteredPhotos.length)
							}
						/>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
}
