import SHeader from "./SHeader";

function SLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<SHeader />
			<main className="p-4">
				{children}
			</main>
		</>
	);
}

export default SLayout;