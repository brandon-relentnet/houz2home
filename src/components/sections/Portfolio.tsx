import { motion } from "motion/react";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import photos from "@/data/portfolioData";

export default function Portfolio() {
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
						commitment to quality craftsmanship and innovative design.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					<MasonryPhotoAlbum photos={photos} />
				</motion.div>
			</div>
		</section>
	);
}
