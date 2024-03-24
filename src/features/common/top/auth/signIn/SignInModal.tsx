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
import { useSignIn } from './useSignIn';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const SignInModal: FC<Props> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const signInSuccess = () => {
    navigate('/home');
    onClose();
  };

  const { register, handleSubmit, onSubmit } = useSignIn({
    onClose: signInSuccess,
    isOpen,
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>サインイン</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form id="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
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
            <Button colorScheme="teal" type="submit" form="sign-in-form">
              {basicButtonTypeDisplay[BasicButtonType.Send]}
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
