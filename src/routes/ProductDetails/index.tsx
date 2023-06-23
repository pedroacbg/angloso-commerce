import "./styles.css";
import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { ProductDTO } from "../../models/product";

const product: ProductDTO = {
  id: 1,
  name: "Smart TV",
  description: "TV muito bonitinha e tinhosa",
  imgUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKMYNuep3L11GeMyoHw5oKpLj_A_Ihhgra7hSyZOkSjRBt-aDp4-WBRG_jUGmjRMmnw4&usqp=CAU",
  price: 2600.88,
  categories: [
    { id: 2, name: "Eletrônicos" },
    { id: 3, name: "Computadores" },
  ],
};

export default function ProductDetails() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard product={product} />
          <div className="dsc-btn-page-container">
            <ButtonPrimary />
            <ButtonInverse />
          </div>
        </section>
      </main>
    </>
  );
}
