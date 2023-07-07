import "./styles.css";
import homeImg from "../../assets/home.svg";
import productsImg from "../../assets/products.svg";
import LoggedUser from "../LoggedUser";

export default function HeaderAdmin() {
  return (
    <header className="dsc-header-admin">
      <nav className="dsc-container">
        <h1>Angloso Admin</h1>
        <div className="dsc-navbar-right">
          <div className="dsc-menu-items-container">
            <div className="dsc-menu-item">
              <img src={homeImg} alt="Início" />
              <p>Início</p>
            </div>
            <div className="dsc-menu-item">
              <img src={productsImg} alt="Cadastro de produtos" />
              <p className="dsc-menu-item-active">Produtos</p>
            </div>
          </div>
          <LoggedUser />
        </div>
      </nav>
    </header>
  );
}
