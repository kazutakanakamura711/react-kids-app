import { supabase } from '@/supabase/Client';
import { useToast } from '@chakra-ui/react';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

type FormData = {
  email: string;
  password: string;
};

export const useSignIn = ({ onClose, isOpen }: Props) => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const toast = useToast();

  const onSubmit = useCallback(
    async ({ email, password }: FormData) => {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        toast({
          title: 'ログイン失敗',
          description: error.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        return false;
      }

      toast({
        title: 'ログイン成功',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      reset();
      onClose();
      return true;
    },
    [toast, reset, onClose],
  );

  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset, isOpen]);

  return {
    register,
    handleSubmit,
    onSubmit,
  };
};
