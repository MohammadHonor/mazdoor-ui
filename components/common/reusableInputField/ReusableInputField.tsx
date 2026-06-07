import { useFormContext } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface ReusableInputFieldProps {
  readonly name: string;
  readonly label: string;
  readonly placeholder?: string;
  readonly type?: string;
}

export const ReusableInputField = ({ name, label, placeholder, type }: ReusableInputFieldProps) => {
  const { control } = useFormContext();

  return (
    // <FormField
    //   control={control}
    //   name={name}
    //   render={({ field }) => (
    //     <FormItem>
    //       <FormLabel>{label}</FormLabel>
    //       <FormControl>
    //         <Input placeholder={placeholder} {...field} type={type}/>
    //       </FormControl>
    //       <FormMessage/>

    //     </FormItem>
    //   )}
    // >
    // </FormField>

    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col gap-0.5">
          <FormLabel className="text-sm">{label}</FormLabel>

          <FormControl>
            <Input placeholder={placeholder} type={type} {...field} className="rounded-[4px]" />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
