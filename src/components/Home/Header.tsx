export default function Header() {
    return (
        <header className="bg-black text-white px-6 text-center">
            <div className="mt-6 flex justify-end space-x-4">
                <a href="/" className="px-6 py-2 border border-white rounded-lg transition-all duration-300 hover:bg-orange-500">
                    Home
                </a>
                <a
                    href="https://forms.gle/example-speaker" // Replace with actual Google Form link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-white rounded-lg transition-all duration-300 hover:bg-orange-500"
                >
                    Inspire as a Speaker
                </a>
                <a
                    href="https://forms.gle/example-participant" // Replace with actual Google Form link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-white rounded-lg transition-all duration-300 hover:bg-orange-500"
                >
                    Join as a Participant
                </a>
            </div>
        </header>
    );
}
