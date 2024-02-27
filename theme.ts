import { createTheme } from '@mantine/core';
import { Open_Sans } from 'next/font/google'


export const openSans = Open_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const theme = createTheme({
  fontFamily: openSans.style.fontFamily,
  primaryColor: 'violet',
  defaultRadius: 'md'
});
