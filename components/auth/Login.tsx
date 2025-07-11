import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { loginSchema, LoginSchema } from '@/lib/validators/login.schema';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { ReusableInputField } from '@/components/common/reusableInputField/ReusableInputField';

interface LoginProps {
  readonly openModal: boolean;
  readonly setOpenModal: (value: boolean) => void;
}

export const Login: React.FC<LoginProps> = ({ openModal, setOpenModal }) => {
  // const [openModal, setOpenModal] = useState<boolean>(true)

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: undefined,
      password: undefined,
    },
  });

  const formHandler = (data: LoginSchema) => {
    console.log(data);
  };

  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogContent className="w-1/4 py-9 [&>button]:hidden">
        <DialogHeader className="flex items-center justify-center">
          <DialogTitle className="text-3xl">Sign In to MAZDOOR</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(formHandler)} className="flex flex-col gap-2">
            <ReusableInputField name="email" label="Email" placeholder="Enter email" type="email" />
            <ReusableInputField name="password" label="Password" placeholder="Enter password" type="password" />
            <div className="flex items-center justify-end">
              <Button variant="link" className="h-2 px-0 py-0 text-xs text-red-500">
                Recover Password ?
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-xs">Not a member yet?</span>
              <Button variant={'link'} className="px-1 text-xs text-red-500">
                JOIN NOW
              </Button>
            </div>
            <Button type="submit">CONTINUE</Button>

            <div className="flex h-9 items-center justify-center gap-4">
              <hr className="flex-grow border border-black" />
              <span className="text-muted-foreground text-sm">Or continue</span>
              <hr className="flex-grow border border-black" />
            </div>

            <div className="flex items-center justify-center">
              <Button className="w-24">Google</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
