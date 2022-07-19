import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

function InputText({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {label && <FormLabel style={{ margin: 0, color: '#06092b' }} htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        type={name}
        id="email"
        focusBorderColor="blue.200"
        bgColor="gray.700"
        variant="filled"
        _hover={{
          bgColor: 'gray.700'
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  )
}

export default InputText
