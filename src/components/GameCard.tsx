import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformListIcons from "./PlatformListicons";
import MetaCritic from "./MetaCritic";
import getCropppedURL from "../services/croppped-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image
          src={getCropppedURL(
            game.background_image
          )}
        />
        <CardBody>
          <Heading fontSize="2xl">
            {" "}
            {game.name}
          </Heading>
          <HStack
            justifyContent={"space-between"}>
            <PlatformListIcons
              platforms={game.parent_platforms.map(
                (p) => p.platform
              )}></PlatformListIcons>
            <MetaCritic
              score={
                game.metacritic
              }></MetaCritic>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
