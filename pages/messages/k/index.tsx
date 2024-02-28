
import { NextPageWithLayout } from "@/types/page";
import { Utils } from "@/utils";
import { ActionIcon, Avatar, BackgroundImage, Badge, Container, Text, TextInput, UnstyledButton } from "@mantine/core";
import { IconMenu2, IconSearch } from "@tabler/icons-react";
import dynamic from "next/dynamic";
import { ReactElement } from "react";

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

const Page: NextPageWithLayout = () => {
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
                        src={Utils.generateRemoteUrlImage('message_bg.png')}
                        className="relative"
                    >
                        <div className="absolute w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30" />
                        <div className="absolute w-full h-full">
                            <section className="flex flex-col">
                                <div className="flex justify-center items-center">
                                    <Badge fw={'bold'} size="lg" variant="filled" color="indigo-500">December 9, 2023</Badge>;
                                </div>
                                <div className="bg-white rounded-md p-1 w-[400px]">
                                    <Text>
                                        Web login code. Dear DAT, we received a request from your account to log in on my.telegram.org. This is your login code:
                                        nhe6eaebez0

                                        Do not give this code to anyone, even if they say they're from Telegram! This code can be used to delete your Telegram account. We never ask to send it anywhere.

                                        If you didn't request this code by trying to log in on my.telegram.org, simply ignore this message.
                                    </Text>
                                </div>
                            </section>
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