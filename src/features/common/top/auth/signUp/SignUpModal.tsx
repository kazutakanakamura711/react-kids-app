import { BasicButtonType, basicButtonTypeDisplay } from '@/types/basicButton';
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useSignUp } from './useSignUp';
import { FC } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const SignUpModal: FC<Props> = ({ isOpen, onClose }) => {
  const { register, handleSubmit, onSubmit } = useSignUp({
    onClose,
    isOpen,
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>サインアップ</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form id="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl id="email" isRequired>
              <FormLabel>メール</FormLabel>
              <Input type="email" {...register('email')} />
            </FormControl>
            <FormControl id="password" mt={4} isRequired>
              <FormLabel>パスワード</FormLabel>
              <Input type="password" {...register('password')} />
            </FormControl>
          </form>
        </ModalBody>
        <ModalFooter>
          <HStack spacing={4} mt={4} justifyContent={'end'}>
            <Button onClick={onClose}>
              {basicButtonTypeDisplay[BasicButtonType.Cancel]}
            </Button>
            <Button colorScheme="teal" type="submit" form="sign-up-form">
              {basicButtonTypeDisplay[BasicButtonType.Registration]}
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
