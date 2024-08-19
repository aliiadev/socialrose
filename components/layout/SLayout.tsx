import dynamic from "next/dynamic";
import SFooter from "./SFooter";
import SNavbar from "./SNavbar";
const SHeader = dynamic(() => import("./SHeader"), { ssr: false });


function SLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<SHeader />
			<SNavbar />
			<main className="p-4">
				{children}
			</main>
			<SFooter />
		</>
	);
}

export default SLayout;