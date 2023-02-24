import { Center, Image } from "@chakra-ui/react";

const Label = ({ bgColor = "transparent", path }) => {
  return (
    <Center background={bgColor} w={"100%"}>
      <Image
        py={"3em"}
        maxW={"750px"}
        objectFit={"contain"}
        src={path}
        alt="Drink can label"
      />
    </Center>
  );
};

export default Label;
