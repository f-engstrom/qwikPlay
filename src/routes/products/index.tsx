import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { Product } from "~/models/models";
import { ALL_PRODUCTS_QUERY } from "~/querys/querys";
import { request } from "~/lib/dato";
import ProductCard from "~/components/productCard";

interface Page {
  allProducts: Product[];
}

const getProducts = routeLoader$(async (requestEvent): Promise<Page> => {
  const page = await request<Page>({
    query: ALL_PRODUCTS_QUERY,
    variables: { productImagesHeight: 400 },
  });
  return page;
});

export default component$(() => {
  const signal = getProducts();
  return (
    <section aria-labelledby="products-heading" class="mt-8">
      <h2 id="products-heading" class="sr-only">
        Products
      </h2>
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {" "}
        {signal.value.allProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            href={product.slug}
            imageSrc={product.mainImage.url}
            imageAlt={product.name}
            price={product.price}
            description={product.shortDescription}
          />
        ))}
      </div>
    </section>
  );
});
