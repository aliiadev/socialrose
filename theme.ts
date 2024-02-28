import { Container, createTheme } from '@mantine/core';
import { Open_Sans, Original_Surfer } from 'next/font/google';
import classes from './theme.module.css'
import clsx from 'clsx';


export const openSans = Open_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const originalSurfer = Original_Surfer({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

export const theme = createTheme({
  fontFamily: openSans.style.fontFamily,
  primaryColor: 'violet',
  defaultRadius: 'md',
  components: {
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: clsx({ [classes.responsiveContainer]: size === 'responsive' }),
      }),
    }),
  },
});
