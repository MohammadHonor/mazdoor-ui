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
        <FormItem className="relative mt-6">
          {/* Label placed on the top-left border */}
          <FormLabel className="absolute -top-3 left-3 z-10 bg-white px-1 text-sm">{label}</FormLabel>

          <FormControl>
            <Input placeholder={placeholder} type={type} {...field} />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
