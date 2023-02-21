import { HStack, Button, Input, Text, useNumberInput } from "@chakra-ui/react";

const ProductCounter = () => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 20,
      precision: 0,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack w={140}>
      <Button {...inc}>+</Button>
      <Input {...input} />
      <Button {...dec}>-</Button>
    </HStack>
  );
};

const ProductCounterSet = () => {
  return (
    <HStack>
      <Text w="100px">數量</Text>
      <ProductCounter />
    </HStack>
  );
};

export default ProductCounterSet;
