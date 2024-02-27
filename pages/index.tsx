import { ReactElement } from "react";
import SLayout from "@/components/layout/SLayout";
import { NextPageWithLayout } from "@/types/page";
import { BackgroundImage, Badge, Button, Card, Center, Divider, Group, Image, NavLink, NumberFormatter, Text, Title } from "@mantine/core";
import { IconArrowRight, IconEdit, IconEye, IconHome, IconMask } from "@tabler/icons-react";
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

const Page: NextPageWithLayout = () => {
	return (
		<div className="flex gap-x-4">
			<div className="bg-[#F0F0FB] rounded-xl p-4 flex flex-col w-[250px] gap-y-4 h-fit">
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
			<div>
				<div className="flex justify-between items-center mb-2">
					<Title order={2}>News</Title>
					<Button size="xs" variant="subtle" rightSection={<IconArrowRight />}>
						{'View All'}
					</Button>
				</div>
				<div className="grid grid-cols-2 gap-2">
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
				</div>
			</div>
			<div className="bg-[#F6F6F6] px-2 py-4">
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
								w={383}
							/>
						</Card.Section>
					</Card>
					<div>
						<Title order={3}>Top list</Title>
						{
							sectionRTopLst.map((el, index) => (
								<Card className="w-[383px] py-2" key={index}>
									<Card.Section component="a" href="#">
										<div className="flex flex-row items-center gap-2 mb-4">
											<Image
												src={el.url}
												w={165}
											/>
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
		</div>
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