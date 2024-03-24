import {
  Link as ChakraLink,
  Modal,
  ModalContent,
  Grid,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FC } from 'react';
import { publicRoutes } from '@/routes/publicRoutes';
import { breakpoints } from '@/utils/breakpoints';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuModal: FC<Props> = ({ isOpen, onClose }) => {
  const [isSmallScreen] = useMediaQuery(`(max-width: ${breakpoints.sm})`);
  const [isMediumScreen] = useMediaQuery(
    `(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg})`,
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={isSmallScreen ? 'xs' : isMediumScreen ? 'md' : '2xl'}
    >
      <ModalOverlay
        backdropFilter="auto"
        backdropInvert="10%"
        backdropBlur="2px"
      />
      <ModalContent>
        <ModalHeader>Example Collection</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
            gap={6}
            p={4}
          >
            {publicRoutes.map((route, index) => (
              <ChakraLink
                as={RouterLink}
                to={route.path}
                key={index}
                onClick={onClose}
              >
                <Text>{route.label}</Text>
              </ChakraLink>
            ))}
          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
