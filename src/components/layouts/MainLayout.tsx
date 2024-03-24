import { Box } from '@chakra-ui/react';
import React, { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return <Box pt={14}>{children}</Box>;
};
