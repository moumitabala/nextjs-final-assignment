import Products from "@/components/products";

const ProductList = async ({ params }: any) => {

    const response = await fetch(`http://localhost:4000/products`);
    const productList: any = await response.json();


    return (
        <main className="my-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap -m-4">
                    {!productList || (productList?.length === 0 && <div>No products found.</div>)}

                    {productList?.map((product: any, index: any) => {
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
        </main>
    );
}

export default ProductList;
