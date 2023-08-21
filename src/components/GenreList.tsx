import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, {
  Genre,
} from "../hooks/useGenres";
import getCropppedURL from "../services/croppped-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({
  selectedGenre,
  onSelectGenre,
}: Props) => {
  const { genres, isLoading, errors } =
    useGenres();
  if (errors) return null;
  if (isLoading) return <Spinner></Spinner>;
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCropppedURL(
                genre.image_background
              )}></Image>
            <Button
              fontWeight={
                selectedGenre?.id === genre.id
                  ? "bold"
                  : "normal"
              }
              fontSize="lg"
              variant="link"
              onClick={() =>
                onSelectGenre(genre)
              }>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
