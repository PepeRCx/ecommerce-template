import ProductCard from "./components/ProductCard/ProductCard.jsx";
import HomeBanner from "./components/HomeBanner/HomeBanner.jsx"
import TopBar from "./components/TopBar/TopBar.jsx";
import NikeShoe from "./assets/nike-joyride.jpg";

function App() {
  return (
    <>
      <TopBar />
      <HomeBanner />
        <div style={{color: 'black'}}>
          <section>
            <ProductCard image={NikeShoe} title={'Tennis Nike Edicion Especial Temporada 2025 ProMax'} price={'$1299.99'} />
          </section>
        </div>
    </>
  )
}

export default App;
