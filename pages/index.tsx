import { ReactElement } from "react";
import SLayout from "@/components/layout/SLayout";
import { NextPageWithLayout } from "@/types/page";
import { Accordion, ActionIcon, Avatar, BackgroundImage, Badge, Button, Card, Center, Container, Divider, Group, Image, Menu, NavLink, NumberFormatter, Text, Title, rem } from "@mantine/core";
import { IconArrowDown, IconArrowRight, IconArrowUp, IconClipboardCopy, IconDeviceTabletHeart, IconEdit, IconEye, IconHeartDown, IconHeartUp, IconHome, IconMask, IconMessage, IconMessageCircle, IconMessageDots, IconShare, IconShare3 } from "@tabler/icons-react";
import { Utils } from "@/utils";


const topLst = [
	'Review', 'News', 'Experience', 'Forum', 'Travels', 'Event', 'Education', 'Shopping', 'Yellow Pages', 'Real estate', 'Finance - banking', 'Services', 'Law', 'Recruitment', 'Ads contact'
]

const exDate = '27 Dec 2023';

const sectionRTopLst = [
	{
		url: Utils.generateUrlImage('home_tl_1.png'),
		shortDesc: '#[Herald Review] Bruno Mars brings magic to sold-out crowd in Seoul',
		views: 8777
	},
	{
		url: Utils.generateUrlImage('home_tl_2.png'),
		shortDesc: '#[Herald Review] Bruno Mars brings magic to sold-out crowd in Seoul',
		views: 8777
	},
	{
		url: Utils.generateUrlImage('home_tl_3.png'),
		shortDesc: '#[Herald Review] Bruno Mars brings magic to sold-out crowd in Seoul',
		views: 8777
	},
	{
		url: Utils.generateUrlImage('home_tl_4.png'),
		shortDesc: '#[Herald Review] Bruno Mars brings magic to sold-out crowd in Seoul',
		views: 8777
	},
]

const highlightArticle = Array(8).fill(0);

const Page: NextPageWithLayout = () => {
	return (
		<Container size={'responsive'} className="flex gap-x-4">
			<div className="bg-[#F0F0FB] rounded-xl p-4 flex flex-col gap-y-4 h-fit w-[250px]">
				<NavLink color="#6165D1" label={'Edit topics'} leftSection={<IconEdit size="1.2rem" stroke={1.5} />} />
				<NavLink active color="#6165D1" label={'Home'} leftSection={<IconHome size="1.2rem" stroke={1.5} />} />
				<NavLink color="#6165D1" label={'Save topic'} leftSection={<IconMask size="1.2rem" stroke={1.5} />} />
				<Divider />
				{topLst.map((top, index) =>
					<Text size={'sm'} key={index}>
						{top}
					</Text>
				)}
				<Button>
					{'Upgrade premium'}
				</Button>
			</div>
			<div className="flex flex-col gap-2">
				<div className="flex justify-between items-center">
					<Title order={2}>News</Title>
					<Button size="xs" variant="subtle" rightSection={<IconArrowRight />}>
						{'View All'}
					</Button>
				</div>
				<section className="grid grid-cols-2 gap-2">
					<Card radius="md" withBorder>
						<Card.Section component="a" href="#">
							<BackgroundImage
								src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
								radius="sm"
							>
								<div className="w-[372px] h-[250px] px-2 py-4 flex flex-col justify-end">
									<div>
										<Text size="lg" lineClamp={2} c="white">
											British billionaire among five missing on Titanic expedition
										</Text>
										<Text size="sm" c="white">{exDate}</Text>
									</div>
								</div>
							</BackgroundImage>
						</Card.Section>
					</Card>
					<Card radius="md" withBorder>
						<Card.Section component="a" href="#">
							<BackgroundImage
								src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png"
								radius="sm"
							>
								<div className="w-[372px] h-[250px] px-2 py-4 flex flex-col justify-end">
									<div>
										<Text size="lg" lineClamp={2} c="white">
											British billionaire among five missing on Titanic expedition
										</Text>
										<Text size="sm" c="white">{exDate}</Text>
									</div>
								</div>
							</BackgroundImage>
						</Card.Section>
					</Card>
					<Card className="col-span-2" radius="md" withBorder>
						<Card.Section component="a" href="#">
							<BackgroundImage
								src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png"
								radius="sm"
							>
								<div className="w-[372px] h-[458px] px-2 py-4 flex flex-col justify-end bg-blend-normal">
									<div>
										<Text size="lg" lineClamp={2} c="white">
											British billionaire among five missing on Titanic expedition
										</Text>
										<Text size="sm" c="white">{exDate}</Text>
									</div>
								</div>
							</BackgroundImage>
						</Card.Section>
					</Card>
				</section>
				<section className="my-4">
					<Title mb={16} order={2}>Highlight article</Title>
					<div className="grid grid-cols-2 gap-4">
						{
							highlightArticle.map((_, index) => (
								<div className="flex gap-2" key={index}>
									<h1 className="text-5xl text-gray-600 font-semibold">#{index + 1}</h1>
									<Text lineClamp={2}>{'Samsung Electronics holds strategy meetings amid macroeconomic'}</Text>
								</div>
							))
						}
					</div>
				</section>
				<section className="my-4">
					<Title mb={16} order={2}>Just for you</Title>
					<div className="grid grid-cols-2 gap-6">
						{
							Array(6).fill(0).map((_, index) => (
								<Card
									key={index}
									component="a"
									href="#"
									target="_blank"
									padding={0}
								>
									<Card.Section>
										<Image
											radius={'lg'}
											src={Utils.generateRemoteUrlImage(`home_jfu_${index + 1}.png`)}
											h={250}
											alt="No way!"
										/>
									</Card.Section>
									<Text fw={500} size="lg" mt="xs">
										British billionaire among five missing on Titanic expedition
									</Text>
									<Group mt="xs">
										<Text size="xs" c={'blue'}>{'Travel'}</Text>
										<Divider orientation="vertical" />
										<Text size="xs" c={'gray'}>27 Dec 2020</Text>
									</Group>
								</Card>
							))
						}
					</div>
				</section>
				<section className="my-4">
					<div className="flex justify-between items-center mb-6">
						<Title order={2}>Forum</Title>
						<Button size="xs" variant="subtle" rightSection={<IconArrowRight />}>
							{'View All'}
						</Button>
					</div>
					<div className="grid grid-cols-1 gap-5">
						{
							Array(5).fill(0).map((_, index) => (
								<Card key={index} padding="lg" radius="md" withBorder>
									<div className="flex gap-4">
										<div className="flex flex-col gap-3 items-center">
											<ActionIcon fw={'bold'} c={'green'} variant="subtle">
												<IconHeartUp />
											</ActionIcon>
											<Text c={'green'} fw={'bold'}>56</Text>
											<ActionIcon fw={'bold'} c={'red'} variant="subtle">
												<IconHeartDown />
											</ActionIcon>
										</div>
										<div className="flex flex-col">
											<div className="grid grid-cols-6">
												<div className="col-span-5">
													<Text fw={'bold'}>Who was the first guy to land on the moon?</Text>
													<Text c={'gray'}>Okay. This is embarrassing but I forgot the name or the guy who landed on the moon the first time.Sorry if this sounds silly
														Anyway, If any of you guys have any idea. Let me know in the comments. Thanks in advance</Text>
													<Badge variant="light" color="blue">#VietNam</Badge>
													<Badge variant="light" color="blue">#Famousrestaurant</Badge>
												</div>
												<Image src={Utils.generateRemoteUrlImage(`home_fr_${index + 1}.png`)} />
											</div>
											<Divider my={'xl'} />
											<div className="flex justify-between items-center">
												<Group gap={'xs'}>
													<Group gap={3}>
														<Avatar src={Utils.generateRemoteUrlImage('home_fr_avatar.png')} mr={4} />
														<Text size="xs" c={'gray'}>Post by</Text>
														<Text fw={500} size="xs" c={'blue'}>Siris Maharijan</Text>
													</Group>
													<Group gap={3}>
														<Text size="xs" c={'gray'}>02hr ago</Text>
														<Text fw={500} size="xs" c={'blue'}>in Explore</Text>
													</Group>
												</Group>
												<Group gap={'xs'}>
													<Group gap={2}>
														<ActionIcon c={'gray'} variant="subtle">
															<IconEye />
														</ActionIcon>
														<Text fw={500} c={'gray'} size="xs">1500</Text>
													</Group>
													<Group gap={2}>
														<ActionIcon c={'gray'} variant="subtle">
															<IconMessageCircle />
														</ActionIcon>
														<Text fw={500} c={'gray'} size="xs">50+</Text>
													</Group>
													<Menu shadow="md" width={200}>
														<Menu.Target>
															<ActionIcon c={'gray'} variant="subtle">
																<IconShare3 />
															</ActionIcon>
														</Menu.Target>

														<Menu.Dropdown>
															<Menu.Item leftSection={<IconClipboardCopy style={{ width: rem(14), height: rem(14) }} />}>
																Copy this post link
															</Menu.Item>
															<Menu.Item leftSection={<IconShare style={{ width: rem(14), height: rem(14) }} />}>
																Share to group
															</Menu.Item>
														</Menu.Dropdown>
													</Menu>
													<ActionIcon c={'gray'} variant="subtle">
														<IconDeviceTabletHeart />
													</ActionIcon>
												</Group>
											</div>
										</div>
									</div>
								</Card>
							))
						}
					</div>
				</section>
			</div>
			<div className="bg-[#F6F6F6] px-2 py-4 max-w-[350px] flex">
				<div className="flex flex-col gap-4">
					<div className="flex items-center gap-2">
						<Image
							src={Utils.generateUrlImage('weather.png')}
							h={80}
							w={100}
						/>
						<div>
							<Title order={3}>Hanoi, Vietnam</Title>
							<Text c="gray" size="md">Mon, 22 May, 2023</Text>
						</div>
					</div>
					<div className="grid grid-cols-3 gap-2">
						<div className="flex flex-col items-center justify-center">
							<Text fw={700} size="xl">+20</Text>
							<Text size="sm" c="#515961">Temperature</Text>
						</div>
						<div className="flex flex-col items-center justify-center">
							<Text fw={700} size="xl">24%</Text>
							<Text size="sm" c="#515961">Humidity</Text>
						</div>
						<div className="flex flex-col items-center justify-center">
							<Text fw={700} size="xl">13km/h</Text>
							<Text size="sm" c="#515961">Wind speed</Text>
						</div>
					</div>
					<Card radius="md" withBorder>
						<Card.Section component="a" href="#">
							<Image
								src={Utils.generateUrlImage('ads.png')}
							/>
						</Card.Section>
					</Card>
					<div>
						<Title order={3}>Top list</Title>
						{
							sectionRTopLst.map((el, index) => (
								<Card className="py-2" key={index}>
									<Card.Section component="a" href="#">
										<div className="grid grid-cols-2 items-center gap-2 mb-4">
											<Image src={el.url} />
											<div>
												<Text lineClamp={3} size="sm">{el.shortDesc}</Text>
												<Group className="text-slate-400" gap={1}>
													<IconEye size={'1rem'} />
													<NumberFormatter className="text-sm" value={el.views} thousandSeparator />
												</Group>
											</div>
										</div>
									</Card.Section>
									<Divider />
								</Card>
							))
						}
					</div>
				</div>
			</div>
		</Container>
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