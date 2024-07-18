import { ReactElement } from 'react';
import { Container } from '@mantine/core';
import SLayout from '@/components/layout/SLayout';
import { NextPageWithLayout } from '@/types/page';

const Page: NextPageWithLayout = () => (
    <Container />
);

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <SLayout>
            {page}
        </SLayout>
    );
};

export default Page;
