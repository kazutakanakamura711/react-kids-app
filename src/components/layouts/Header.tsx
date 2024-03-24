import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, HStack, Icon, useDisclosure } from '@chakra-ui/react';
import { MenuModal } from './MenuModal';

export const Header = () => {
  const menuModal = useDisclosure();

  return (
    <>
      <Box
        w="100vw"
        color="gray.800"
        p={4}
        className="pointer-events-auto"
        position="fixed"
        zIndex={10}
      >
        <HStack
          as="nav"
          alignItems="center"
          justifyContent="space-between"
          gap={4}
        >
          <HStack gap={8}>
            <Box
              onClick={menuModal.onOpen}
              cursor="pointer"
              _hover={{ opacity: 0.5 }}
            >
              <Icon as={HamburgerIcon} w={8} h={8} />
            </Box>
            <Box as="h1">Kids App</Box>
          </HStack>
        </HStack>
      </Box>

      <MenuModal
        isOpen={menuModal.isOpen}
        onClose={menuModal.onClose}
      />
    </>
  );
};
