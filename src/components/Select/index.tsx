import { FormControl, FormLabel, SelectProps as SelectPropsChakra, Select as SelectChakra } from "@chakra-ui/react";

type Option = {
  value: string;
  name: string;
}

interface SelectProps extends SelectPropsChakra {
  name: string;
  label?: string;
  options: Option[]
}

function Select({ name, label, options, ...rest }: SelectProps) {
  return (
    <FormControl>
      {label && <FormLabel style={{ margin: 0, color: '#06092b' }} htmlFor={name}>{label}</FormLabel>}
      <SelectChakra
        name={name}
        id="email"
        focusBorderColor="blue.200"
        bgColor="gray.700"
        variant="filled"
        _hover={{
          bgColor: 'gray.700'
        }}
        size="lg"
        {...rest}
      >
        {options.map(option => (
          <option value={option.value}>{option.name}</option>
        ))}
      </SelectChakra>
    </FormControl>
  )
}

export default Select
