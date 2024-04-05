import Banner from "@/components/banner";
import Products from "@/components/products";

const Home = async () => {
  const response = await fetch(`http://localhost:4000/products`);
  const productList: any = await response.json();
  return (
    <>
      <Banner image="https://via.placeholder.com/1200x400" alt="Banner image" />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {productList && productList?.map((product: any, index: any) => {
              return (
                <Products
                  key={index}
                  productsDesc={product}
                  image="https://via.placeholder.com/50x48"
                  alt="alt"
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
