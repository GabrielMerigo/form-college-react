import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputProps,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from "@chakra-ui/react";

interface InputNumberProps extends NumberInputProps {
  name: string;
  label?: string;
}

function InputNumber({ name, label, ...rest }: InputNumberProps) {
  return (
    <FormControl>
      {label && <FormLabel style={{ margin: 0, color: '#06092b' }} htmlFor={name}>{label}</FormLabel>}


      <NumberInput
        style={{ background: 'gray.700' }}
        name={name}
        focusBorderColor="blue.200"
        variant="filled"
        size="lg"
        {...rest}
      >
        <NumberInputField color='black' bgColor="gray.700" _hover={{ bgColor: 'gray.700' }} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  )
}

export default InputNumber
