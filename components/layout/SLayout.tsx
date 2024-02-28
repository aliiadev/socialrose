import dynamic from "next/dynamic";
import SFooter from "./SFooter";
const SHeader = dynamic(() => import("./SHeader"), { ssr: false });


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
			<SFooter />
		</>
	);
}

export default SLayout;