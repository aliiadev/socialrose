import { UnstyledButton } from '@mantine/core';
import type { UnstyledButtonProps } from '@mantine/core';
import React from 'react';

export type SButtonIconProps = UnstyledButtonProps & {
  icon: JSX.Element
};

const SButtonIcon =
  React.forwardRef<HTMLButtonElement, SButtonIconProps>((props, ref) =>
    <UnstyledButton
      ref={ref}
      c="gray"
      p={8}
      className="hover:bg-gray-100 rounded-full"
      {...props}
    >
      {props.icon}
    </UnstyledButton>
);

export default SButtonIcon;
