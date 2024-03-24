import { Box, Button, Flex, HStack, useDisclosure } from '@chakra-ui/react';
import { SignInModal } from './auth/signIn/SignInModal';
import { SignUpModal } from './auth/signUp/SignUpModal';

export const Top = () => {
  const signUpModal = useDisclosure();
  const signInModal = useDisclosure();

  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        height="100vh"
        flexDirection="column"
      >
        <Box as="h1" fontSize="4xl" mb={4}>
          React Kids App
        </Box>
        <HStack spacing={4}>
          <Button colorScheme="teal" onClick={signUpModal.onOpen}>
            サインアップ
          </Button>
          <Button colorScheme="teal" onClick={signInModal.onOpen}>
            サインイン
          </Button>
        </HStack>
      </Flex>

      <SignUpModal isOpen={signUpModal.isOpen} onClose={signUpModal.onClose} />
      <SignInModal isOpen={signInModal.isOpen} onClose={signInModal.onClose} />
    </>
  );
};
