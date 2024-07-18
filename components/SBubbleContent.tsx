import { Avatar, Text } from '@mantine/core';
import classNames from 'classnames';
import React from 'react';

export type SBubbleContentProps = {
  sendDate?: string,
  avatar?: string,
  content: string | TrustedHTML,
  isSend: boolean
};

const SBubbleContent = ({
  avatar,
  content,
  sendDate,
  isSend,
}: SBubbleContentProps) => (
  <div className="flex flex-col w-full">
    <div className="flex justify-center items-center w-full">
      <Text py={2} size="sm">{sendDate}</Text>
    </div>
    <div className={classNames({ 'flex-row-reverse': isSend }, 'flex gap-2 px-2')}>
      {!isSend && <Avatar variant="filled" size="md" color="red">{avatar?.charAt(0)}</Avatar>}
      <div className={classNames('rounded-md py-1 px-2 w-fit max-h-fit max-w-[75%]', { 'bg-white': !isSend, 'bg-[#E3FEE0]': isSend })}>
        <div className="whitespace-pre-line" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  </div>
);

export { SBubbleContent };
