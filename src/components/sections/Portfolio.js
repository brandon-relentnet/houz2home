import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import photos from "@/utils/portfolioData"; // Your generated photo data

export default function PortfolioPage() {
    return (
        <section className="py-12 px-4 md:px-8 lg:px-16 mb-12 lg:mb-28">
            <div className="max-w-7xl mx-auto">
                <h1 className="mb-4">Previous works</h1>
                <p className="max-w-2xl mb-8">
                    Explore a selection of our completed projects, showcasing our commitment
                    to quality craftsmanship and innovative design.
                </p>

                <MasonryPhotoAlbum
                    photos={photos}
                />
            </div>
        </section>
    );
}
