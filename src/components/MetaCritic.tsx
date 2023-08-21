import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const MetaCritic = ({ score }: Props) => {
  return (
    <>
      <Badge
        fontSize={"14px"}
        borderRadius={2}
        paddingX={2}
        colorScheme={
          score > 90 ? "green" : "yellow"
        }>
        {" "}
        {score}
      </Badge>
    </>
  );
};

export default MetaCritic;
