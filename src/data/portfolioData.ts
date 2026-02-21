export type PhotoCategory =
	| "all"
	| "kitchen"
	| "bathroom"
	| "living"
	| "custom";

export interface Photo {
	src: string;
	width: number;
	height: number;
	alt: string;
	category: Exclude<PhotoCategory, "all">;
	title: string;
}

const portfolioPhotos: Photo[] = [
	{
		src: "/portfolio/00000IMG_00000_BURST20180523112340239_COVER.jpg",
		width: 1000,
		height: 1333,
		alt: "Renovated kitchen with warm wood cabinetry and modern fixtures",
		category: "kitchen",
		title: "Warm Wood Kitchen",
	},
	{
		src: "/portfolio/20200807_150257-scaled.jpg",
		width: 1152,
		height: 2560,
		alt: "Open-concept living room with new hardwood floors and recessed lighting",
		category: "living",
		title: "Open-Concept Living",
	},
	{
		src: "/portfolio/20200807_150326-scaled.jpg",
		width: 1153,
		height: 2560,
		alt: "Living space detail showing crown molding and accent wall finish",
		category: "living",
		title: "Accent Wall Detail",
	},
	{
		src: "/portfolio/BathroomIMG_20190228_175857-scaled.jpg",
		width: 2124,
		height: 2560,
		alt: "Complete bathroom renovation with marble tile and glass shower enclosure",
		category: "bathroom",
		title: "Marble & Glass Bath",
	},
	{
		src: "/portfolio/Freestandingtub.jpg",
		width: 2500,
		height: 1875,
		alt: "Elegant freestanding soaking tub with brushed nickel fixtures",
		category: "bathroom",
		title: "Freestanding Soaker",
	},
	{
		src: "/portfolio/IMG_20180726_2046581-scaled.jpg",
		width: 1920,
		height: 2560,
		alt: "Updated kitchen with granite countertops and stainless steel appliances",
		category: "kitchen",
		title: "Granite & Steel Kitchen",
	},
	{
		src: "/portfolio/IMG_20180913_130604.jpg",
		width: 999,
		height: 999,
		alt: "Kitchen island with pendant lighting and waterfall edge countertop",
		category: "kitchen",
		title: "Waterfall Island",
	},
	{
		src: "/portfolio/IMG_20190609_223338_022.jpg",
		width: 2445,
		height: 1944,
		alt: "Spacious renovated living area with built-in entertainment center",
		category: "living",
		title: "Entertainment Center Build",
	},
	{
		src: "/portfolio/IMG_4828-scaled.jpg",
		width: 1872,
		height: 2560,
		alt: "Custom kitchen cabinetry with soft-close drawers and pull-out organizers",
		category: "kitchen",
		title: "Custom Cabinetry",
	},
	{
		src: "/portfolio/Meyersafter-scaled.jpg",
		width: 1920,
		height: 2560,
		alt: "Completed whole-room renovation with neutral palette and modern lighting",
		category: "living",
		title: "Meyers Residence",
	},
	{
		src: "/portfolio/PXL_20201124_220210307.jpg",
		width: 2500,
		height: 1406,
		alt: "Wide-view kitchen renovation showcasing open layout and breakfast bar",
		category: "kitchen",
		title: "Open Kitchen & Bar",
	},
	{
		src: "/portfolio/PXL_20201124_220256031-scaled.jpg",
		width: 1440,
		height: 2560,
		alt: "Kitchen pantry organization with custom shelving and pull-out baskets",
		category: "kitchen",
		title: "Pantry Organization",
	},
	{
		src: "/portfolio/builtindresser-scaled.jpg",
		width: 1920,
		height: 2560,
		alt: "Custom built-in dresser with brushed gold hardware and integrated lighting",
		category: "custom",
		title: "Built-In Dresser",
	},
	{
		src: "/portfolio/closetshoes-scaled.jpg",
		width: 1920,
		height: 2560,
		alt: "Walk-in closet with dedicated shoe storage and adjustable shelving",
		category: "custom",
		title: "Walk-In Closet System",
	},
	{
		src: "/portfolio/shoes-scaled.jpg",
		width: 1920,
		height: 2560,
		alt: "Custom shoe display wall with angled shelves and accent lighting",
		category: "custom",
		title: "Shoe Display Wall",
	},
];

export default portfolioPhotos;
