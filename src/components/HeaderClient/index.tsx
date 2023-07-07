import "./styles.css";
import { Link } from "react-router-dom";
import CartIcon from "../CartIcon";
import iconAdmin from "../../assets/admin.svg";
import { hasAnyRoles } from "../../services/auth-service";
import { ContextToken } from "../../utils/context-token";
import { useContext } from "react";

export default function HeaderClient() {
  const { contextTokenPayload } = useContext(ContextToken);

  return (
    <header className="dsc-header-client">
      <nav className="dsc-container">
        <Link to={`/`}>
          <h1>Angloso Commerce</h1>
        </Link>
        <div className="dsc-navbar-right">
          <div className="dsc-menu-items-container">
            {contextTokenPayload && hasAnyRoles(["ROLE_ADMIN"]) && (
              <Link to="/admin">
                <div className="dsc-menu-item">
                  <img src={iconAdmin} alt="Admin" />
                </div>
              </Link>
            )}
            <Link to={`/cart`}>
              <div className="dsc-menu-item">
                <CartIcon />
              </div>
            </Link>
          </div>
          <Link to={`/login`}>Entrar</Link>
        </div>
      </nav>
    </header>
  );
}
