import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";

export default function HomePage() {
  console.log(sampleData);
  return (
    <>
      <ProductList data={sampleData.products} title="New items" limit={4} />;
    </>
  );
}
