export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer>
			<div>
				&copy; {currentYear} Houz2Home{" "}
				<span className="italic text-subtext0">All rights reserved</span>
			</div>
		</footer>
	);
}
