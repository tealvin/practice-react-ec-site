import { HStack, Box, Text, useRadio, useRadioGroup } from "@chakra-ui/react";

const RadioCard = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
};

const RadioCardSet = ({
  options = [],
  setName: name = "",
  setTitle = "",
} = {}) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    defaultValue: options[0] || "",
    onChange: console.log,
  });
  const group = getRootProps();

  if (!options.length || !name || !setTitle) return;

  const radioCards = options.map((value) => {
    const radio = getRadioProps({ value });

    return (
      <RadioCard key={value} {...radio}>
        {value}
      </RadioCard>
    );
  });

  return (
    <HStack {...group}>
      <Text w="100px">{setTitle}</Text>
      {radioCards}
    </HStack>
  );
};

export default RadioCardSet;
