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

export const useSignUp = ({ onClose, isOpen }: Props) => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const toast = useToast();

  const onSubmit = useCallback(
    async ({ email, password }: FormData) => {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) {
        console.error(error);
        toast({
          title: 'ユーザー登録失敗',
          description: error.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }

      toast({
        title: 'ユーザー登録成功',
        description: '確認メールを送信しました。',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      reset();
      onClose();
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
