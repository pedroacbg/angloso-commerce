import "./styles.css";
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import { ProductDTO } from "../../../models/product";

const product: ProductDTO = {
  id: 1,
  name: "Oyama Mahiro",
  description: "Muito bonitinha e tinhosa",
  imgUrl: "https://images2.alphacoders.com/130/thumb-1920-1304302.jpeg",
  price: 2600.88,
  categories: [
    { id: 2, name: "Eletrônicos" },
    { id: 3, name: "Computadores" },
  ],
};

export default function Catalog() {
  return (
    <>
      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar />
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
          </div>
          <ButtonNextPage />
        </section>
      </main>
    </>
  );
}
