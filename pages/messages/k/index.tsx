'use client'

import SBubbleContent from "@/components/SBubbleContent";
import SButtonIcon from "@/components/layout/SButtonIcon";
import { NextPageWithLayout } from "@/types/page";
import { Utils } from "@/utils";
import { ActionIcon, Avatar, BackgroundImage, Badge, Container, Group, Menu, Text, TextInput, UnstyledButton, rem } from "@mantine/core";
import { IconDotsVertical, IconFile, IconMenu2, IconMoodSmile, IconPaperclip, IconPhoneCall, IconPhoto, IconSearch } from "@tabler/icons-react";
import dynamic from "next/dynamic";
import { KeyboardEventHandler, ReactElement, useEffect, useState } from "react";


const SHeader = dynamic(() => import("@/components/layout/SHeader"), { ssr: false });

const messages = [
	{
		shortName: 'JS',
		chanelName: 'Jame Some',
		lastSendDate: 'Mon',
		lastMessage: 'Done! Congratulations on your new bot. You will find it at'
	},
	{
		shortName: 'T',
		chanelName: 'Team up',
		lastSendDate: '12/10/1998',
		lastMessage: 'Done! Congratulations on your new bot. You will find it at'
	},
	{
		shortName: 'L',
		chanelName: 'Long',
		lastSendDate: 'Mon',
		lastMessage: 'Done! Congratulations on your new bot. You will find it at'
	},
	{
		shortName: 'L',
		chanelName: 'Leal',
		lastSendDate: 'Mon',
		lastMessage: 'Done! Congratulations on your new bot. You will find it at'
	},
	{
		shortName: 'PO',
		chanelName: 'Project obj',
		lastSendDate: 'Mon',
		lastMessage: 'Done! Congratulations on your new bot. You will find it at'
	},
	{
		shortName: 'HR',
		chanelName: 'HR Team',
		lastSendDate: 'Mon',
		lastMessage: 'Done! Congratulations on your new bot. You will find it at'
	},
	{
		shortName: 'MI',
		chanelName: 'Mai Linh',
		lastSendDate: 'Mon',
		lastMessage: 'Done! Congratulations on your new bot. You will find it at'
	},
]

type BubMessage = {
	content?: string,
	sendDate: string,
	isMe: boolean
}

const Page: NextPageWithLayout = () => {

	const [bubMessage, setBubMessage] = useState<BubMessage[]>([]);

	const onKeyMessage = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter' && e.shiftKey == false) {
			e.preventDefault();
			let mess = document.getElementById('messageBub');
			if (mess) {
				setBubMessage([...bubMessage, {
					content: mess.innerHTML,
					sendDate: new Date().toDateString(),
					isMe: true
				}])
				mess.innerHTML = '';
			}
		}
	}

	return (
		<div className="h-full">
			<Container size={'responsive'} className="grid grid-cols-8">
				<div className="col-span-2 border-l border-r border-gray-300 p-2 h-[calc(100vh_-_79px)]">
					<div className="flex items-center gap-3 mb-2">
						<ActionIcon variant="subtle" c={'gray'}>
							<IconMenu2 />
						</ActionIcon>
						<div className="border border-gray-200 rounded-2xl w-full">
							<TextInput
								variant="unstyled"
								leftSection={<IconSearch />}
								placeholder="Search"
							/>
						</div>
					</div>
					{
						messages.map((el, index) => (
							<div key={index} className="flex items-center gap-2 hover:bg-[#f3f3f3] p-2 rounded-lg cursor-pointer">
								<Avatar variant="filled" alt="Jame Some" size={44} color={'#' + Math.floor(Math.random() * 16777215).toString(16)}>{el.shortName}</Avatar>
								<div>
									<div className="flex items-center justify-between">
										<Text fw={'bold'} size="md">{el.chanelName}</Text>
										<Text c={'gray'} size="xs">{el.lastSendDate}</Text>
									</div>
									<Text c={'gray'} lineClamp={1} size="sm">{el.lastMessage}</Text>
								</div>
							</div>
						))
					}
				</div>
				<div className="col-span-6">
					<BackgroundImage
						w={'100%'}
						h={'100%'}
						src={'null'}
						className="relative bg-gray-300 overflow-hidden"
					>
						<div className="absolute w-full h-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 opacity-30" />
						<div className="absolute w-full h-full">
							<div className="relative w-full h-full">
								<div className="absolute top-0 w-full bg-white border py-2 px-4 max-h-[58px]">
									<div className="flex justify-between">
										<Group gap={'xs'}>
											<Avatar variant="filled" size={'md'} color="red">{'N'}</Avatar>
											<div>
												<Text fw={'bold'} size="sm">{'Ko Pin Chung'}</Text>
												<Text c={'gray'} size="xs">{'last seen recently'}</Text>
											</div>
										</Group>
										<Group gap={'xs'}>
											<SButtonIcon icon={<IconPhoneCall />} />
											<SButtonIcon icon={<IconSearch />} />
											<SButtonIcon icon={<IconDotsVertical />} />
										</Group>
									</div>
								</div>
								<div className="absolute top-14 w-full overflow-scroll h-full">
									<section className="flex flex-col w-full">
										{
											bubMessage.map((el, index) => (
												<SBubbleContent
													key={index}
													avatar="S"
													sendDate={el.sendDate}
													content={el.content as string}
													isSend={el.isMe}
												/>
											))
										}
									</section>
									<div className="h-[10px]"></div>
								</div>
								<div className="absolute bottom-0 flex w-full justify-center">
									<div className="flex bg-white gap-1 p-1 justify-end items-end w-full">
										<SButtonIcon icon={<IconMoodSmile />} />
										<div className="flex items-center flex-auto overflow-hidden min-h-11 w-full relative">
											<div id="messageBub" onKeyDown={onKeyMessage} className="overflow-y-auto cursor-text whitespace-pre-wrap outline-none select-text w-full" contentEditable />
										</div>
										<Menu shadow="md" width={160}>
											<Menu.Target>
												<SButtonIcon icon={<IconPaperclip />} />
											</Menu.Target>

											<Menu.Dropdown>
												<Menu.Item leftSection={<IconPhoto style={{ width: rem(14), height: rem(14) }} />}>
													Photo or video
												</Menu.Item>
												<Menu.Item leftSection={<IconFile style={{ width: rem(14), height: rem(14) }} />}>
													Document
												</Menu.Item>
											</Menu.Dropdown>
										</Menu>

									</div>
								</div>
							</div>

						</div>
					</BackgroundImage>
				</div>
			</Container>
		</div>
	)
}

Page.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<SHeader />
			<main>
				{page}
			</main>
		</>
	)
}

export default Page;