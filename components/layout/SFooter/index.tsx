import { Container, Divider, Text, Title } from '@mantine/core';
import { originalSurfer } from '@/theme';

function SFooter() {
  return (
    <footer className="bg-gray-100 w-full py-6">
      <Container size="lg" py="lg">
        <div className="flex justify-between">
          <div className="w-[326px] flex flex-col gap-6">
            <Title className={originalSurfer.className} c="violet" fw="bold" order={1}>Social Rose.</Title>
            <Text c="gray">Design amazing digital experiences that create more happy in the world.</Text>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <Text c="gray" size="xs">Products</Text>
              <Text size="sm">Products</Text>
              <Text size="sm">Features</Text>
              <Text size="sm">Solution</Text>
              <Text size="sm">Tutorial</Text>
            </div>
            <div className="flex flex-col gap-3">
              <Text c="gray" size="xs">Social rose</Text>
              <Text size="sm">About us</Text>
              <Text size="sm">Feedback</Text>
              <Text size="sm">Ads contact</Text>
              <Text size="sm">Careers</Text>
            </div>
            <div className="flex flex-col gap-3">
              <Text c="gray" size="xs">Legal</Text>
              <Text size="sm">Terms</Text>
              <Text size="sm">FAQs</Text>
              <Text size="sm">Contact us</Text>
            </div>
          </div>
        </div>
        <Divider my="xl" />
        <Text className="text-center" size="sm" c="gray">© 2023 . All rights reserved.</Text>
      </Container>
    </footer>
  );
}

export { SFooter };
