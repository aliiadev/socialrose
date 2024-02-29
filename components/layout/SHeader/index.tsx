import { originalSurfer } from '@/theme';
import { Utils } from '@/utils';
import { ActionIcon, Avatar, CloseButton, ColorSwatch, Divider, Group, Indicator, Menu, Popover, Select, Text, TextInput, Title, UnstyledButton } from '@mantine/core';
import { IconArrowUp, IconBell, IconChevronDown, IconChevronUp, IconFlame, IconMapPin, IconMessage, IconReport, IconSearch, IconSettings, IconSettings2, IconShoppingBag, IconUserCircle, IconWashPress } from "@tabler/icons-react";
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { useElementSize, useOnClickOutside, useToggle } from 'usehooks-ts';
import SButtonIcon from '../SButtonIcon';
import classNames from 'classnames';

const categorySearch: string[] = [
	'All criteria', 'News', 'Forum', 'Product', 'Services', 'Business account', 'Personal account'
]

const historySearch: string[] = [
	'Restaurant in Hanoi', 'Travel in Vietnam', 'What is Pho?', 'The old'
]

const hashTags = [
	{ type: 1, tag: 'Vietnam' }, { type: 1, tag: 'Pho ngon' }, { type: 2, tag: 'Pho' }, { type: 1, tag: 'HoChiMinh' }
]

function SHeader() {

	const [searchRef, { width = 0 }] = useElementSize();

	const [isOpenHistory, toggleHistory] = useToggle();

	const router = useRouter();

	const historyDropdownRef = useRef(null);

	const handleClickHistoryOutside = () => {
		toggleHistory();
	}

	useOnClickOutside(historyDropdownRef, handleClickHistoryOutside)

	return (
		<header className="py-4 px-2 border-b border-[#DBDBDB]">
			<div className="grid grid-cols-4 items-center gap-4">
				<Title onClick={() => router.push('/')} className={classNames(originalSurfer.className, 'cursor-pointer')} c={'violet'} fw={'bold'} order={1}>Rose</Title>
				<Popover width={width} opened={isOpenHistory}>
					<Popover.Target>
						<div ref={searchRef} className="border border-[#DBDBDB] flex rounded-xl px-2 col-span-2">
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
								onFocus={toggleHistory}
							/>
						</div>
					</Popover.Target>
					<Popover.Dropdown ref={historyDropdownRef} p={'md'}>
						<div className='flex justify-between'>
							<Text size='sm'>History</Text>
							<UnstyledButton>
								<Text fw={500} size='sm' c={'blue'}>Clear all</Text>
							</UnstyledButton>
						</div>
						<div className='py-2'>
							{
								historySearch.map((el, index) => (
									<div key={index} className='p-2 flex justify-between hover:bg-[#F3F0F6] rounded-md items-center'>
										<Group>
											<ColorSwatch size={8} color='#828C97' />
											<Text>{el}</Text>
										</Group>
										<CloseButton />
									</div>
								))
							}
						</div>
						<Text size='sm'>Trending hashtag</Text>
						<div className='py-2'>
							{
								hashTags.map((el, index) => (
									<div className='p-2 flex hover:bg-[#F3F0F6] rounded-md items-center' key={index}>
										<Group>
											{el.type === 2 ? <IconArrowUp size={'1rem'} color='blue' /> : <IconFlame size={'1rem'} color='red' />}
											<Text>{`#${el.tag}`}</Text>
										</Group>
									</div>
								))
							}
						</div>
					</Popover.Dropdown>
				</Popover>
				<div className="flex items-center gap-2 justify-end">
					<SButtonIcon p={0} c={'dark'} icon={<IconMessage onClick={() => router.push('/messages/k')} />} />
					<SButtonIcon p={0} c={'dark'} icon={<IconBell />} />
					<SButtonIcon p={0} c={'dark'} icon={<IconShoppingBag />} />
					<Divider orientation="vertical" />

					<Menu shadow="md" width={280}>
						<Menu.Target>
							<Group gap={'xs'}>
								<Avatar src={Utils.generateRemoteUrlImage('home_fr_avatar.png')} radius={'md'} size={'md'} />
								<Group gap={4}>
									<Text size='sm'>Dark Meow</Text>
									<SButtonIcon icon={<IconChevronDown size={'1rem'} />} />
								</Group>
							</Group>
						</Menu.Target>

						<Menu.Dropdown p={'md'}>
							<Menu.Item>
								<Group>
									<Avatar src={Utils.generateRemoteUrlImage('home_fr_avatar.png')} radius={'xl'} size={'sm'} />
									<div>
										<Text fw={'bold'}>Dark Meow</Text>
										<Text c={'violet'}>Premium account</Text>
									</div>
								</Group>
							</Menu.Item>
							<Divider my={'sm'} />
							<Menu.Item c={'gray'} leftSection={<IconUserCircle />}>
								<Text c={'dark'} size='sm' fw={500}>My profile</Text>
							</Menu.Item>
							<Menu.Item c={'gray'} leftSection={<IconWashPress />}>
								<Text c={'dark'} size='sm' fw={500}>Upgrade premium</Text>
							</Menu.Item>
							<Divider my={'sm'} />
							<Menu.Item c={'gray'} leftSection={<IconReport />}>
								<Text c={'dark'} size='sm' fw={500}>Feedback</Text>
							</Menu.Item>
							<Menu.Item c={'gray'} leftSection={<IconMapPin />}>
								<Text c={'dark'} size='sm' fw={500}>Shipping address</Text>
							</Menu.Item>
							<Menu.Item c={'gray'} leftSection={<IconSettings2 />}>
								<Text c={'dark'} size='sm' fw={500}>Settings</Text>
							</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				</div>
			</div>
		</header>
	);
}

export default SHeader;