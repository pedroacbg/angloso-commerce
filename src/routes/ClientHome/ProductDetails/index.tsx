import "./styles.css";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
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

export default function ProductDetails() {
  return (
    <>
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard product={product} />
          <div className="dsc-btn-page-container">
            <ButtonPrimary text="Comprar" />
            <ButtonInverse text="Início" />
          </div>
        </section>
      </main>
    </>
  );
}
