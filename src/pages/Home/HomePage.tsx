import * as H from "./HomePage.style";

// image
import background from "../../assets/image_background.png";

export default function HomePage() {
  return (
    <H.Container>
      <H.Title>{"타입한입\n다이어리"}</H.Title>
      <H.BackgroundImage src={background} />
    </H.Container>
  );
}
