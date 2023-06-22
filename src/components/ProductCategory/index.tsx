import "./styles.css";

export default function ProductCategory(props: { name: string }) {
  return <div className="dsc-category">{props.name}</div>;
}
