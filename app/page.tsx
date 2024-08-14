import image from "next/image";
import Container from "./components/nav/Container";
import HomeBanner from "./components/HomeBanner";

export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div>
          <HomeBanner />
        </div>
      </Container>
    </div>
  );
}
