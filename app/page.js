import Banner from "./components/Banner";
import About from "./components/About";
import RoomsLocation from "./components/RoomsLocation";
import RoomGallery from "./components/RoomGallery";

export default function Home() {
  return (
    <div>
      <Banner />

      <About />

      <RoomGallery />

      <RoomsLocation />
    </div>
  );
}
