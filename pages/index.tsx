import { ReactElement } from "react";
import SLayout from "@/components/layout/SLayout";
import { NextPageWithLayout } from "@/types/page";

const Page: NextPageWithLayout = () => {
	return (
		<div></div>
	)
}

Page.getLayout = function getLayout(page: ReactElement) {
	return (
		<SLayout>
			{page}
		</SLayout>
	)
}

export default Page;