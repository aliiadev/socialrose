import { ActionIcon, Avatar, Divider, Select, TextInput } from '@mantine/core';
import { IconBell, IconChevronDown, IconMessage, IconSearch, IconShoppingBag } from "@tabler/icons-react";

const categorySearch: string[] = [
	'All criteria', 'News', 'Forum', 'Product', 'Services', 'Business account', 'Personal account'
]

function SHeader() {

	return (
		<header className="py-4 px-2 border-b border-[#DBDBDB]">
			<div className="grid grid-cols-4 items-center gap-4">
				<div></div>
				<div className="border border-[#DBDBDB] flex rounded-xl px-2 col-span-2">
					<Select
						variant="unstyled"
						rightSection={<IconChevronDown />}
						data={categorySearch}
						placeholder={categorySearch[0]}
					/>
					<TextInput
						className="w-full"
						variant="unstyled"
						placeholder="Search news"
						rightSection={<IconSearch />}
					/>
				</div>
				<div className="flex items-center gap-2 justify-end">
					<ActionIcon variant="subtle">
						<IconMessage />
					</ActionIcon>
					<ActionIcon variant="subtle">
						<IconBell />
					</ActionIcon>
					<ActionIcon variant="subtle">
						<IconShoppingBag />
					</ActionIcon>
					<Divider orientation="vertical" />
					<ActionIcon variant="subtle">
						<Avatar color="blue" radius={'xl'} />
					</ActionIcon>
				</div>
			</div>
		</header>
	);
}

export default SHeader;