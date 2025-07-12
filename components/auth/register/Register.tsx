import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';

import { registerSchema, RegisterSchema } from '@/lib/validators/register.schema';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { ReusableInputField } from '@/components/common/reusableInputField/ReusableInputField';

import 'react-phone-input-2/lib/style.css';

import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface RegisteProps {
  openModal: boolean | undefined;
  setOpenModal: (val: boolean) => void;
}

export const Register = ({ openModal, setOpenModal }: RegisteProps) => {
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      userName: undefined,
      email: undefined,
      mobileNumber: undefined,
      role: undefined,
      profession: undefined,
      password: undefined,
      confirmPassword: undefined,
    },
  });

  const professionItems = ['Architecture', 'Labour', 'Carpenter', 'Electrician', 'Plumber'];
  const roleItems = ['Owner', 'Worker'];
  const formHandler = (inputData: RegisterSchema) => {
    console.log(inputData);
  };
  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogContent className="w-1/4 py-4 [&>button]:hidden">
        <DialogHeader className="flex items-center justify-center">
          <DialogTitle className="text-3xl">Join MAZDOOR</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(formHandler)} className="flex flex-col gap-2">
            <ReusableInputField name="userName" label="User Name" placeholder="Enter user name" />
            <ReusableInputField name="email" label="Email" placeholder="Enter email" type="email" />
            <FormField
              control={form.control}
              name="mobileNumber"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-0.5">
                  <FormLabel className="text-sm">Mobile Number</FormLabel>
                  <FormControl>
                    <PhoneInput
                      country={'in'}
                      value={field.value}
                      onChange={field.onChange}
                      inputClass="w-full text-sm focus:outline focus:outline-1 focus:border-2 focus:border-red-800"
                      inputStyle={{
                        width: '100%',
                        height: '42px',
                        fontSize: '14px',
                      }}
                      inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: true,
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-0.5">
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="w-full rounded-[4px]">
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {roleItems.map((value: string, idx: number) => (
                            <SelectItem key={`value-${idx}`} value={value}>
                              {value}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="profession"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1">
                  <FormLabel>Profession</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={form.watch('role') === 'Owner' ? true : false}
                    >
                      <SelectTrigger className="w-full rounded-[4px]">
                        <SelectValue placeholder="Select a profession" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {professionItems.map((value: string, idx: number) => (
                            <SelectItem key={`value-${idx}`} value={value}>
                              {value}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <ReusableInputField name="password" label="Password" placeholder="Enter password" type="password" />
            <ReusableInputField
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Confirm Password"
              type="password"
            />

            <Button type="submit" className="">
              Join
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
