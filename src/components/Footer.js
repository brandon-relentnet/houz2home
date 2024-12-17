export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div>
                © {currentYear} [Your Name]
            </div>
        </footer>
    );
}