import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { request } from "~/lib/dato";
import { PAGE_QUERY } from "~/querys/querys";
import { render } from "datocms-structured-text-to-html-string";

export const useProductDetails = routeLoader$(async (requestEvent) => {
  // This code runs only on the server, after every navigation
  const { page } = await request({
    query: PAGE_QUERY,
    variables: {
      pageSlug: requestEvent.params.slug,
      mainImageHeight: 400,
    },
    preview: false,
  });
  return page;
});

export default component$(() => {
  const signal = useProductDetails(); // Readonly<Signal<Product>>
  return (
    <div class="flex flex-col items-center justify-center">
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>
      <div class="container container-center container-spacing-xl">
        <h3>{signal.value.title}</h3>
      </div>
      <img src={signal.value.mainImage.url} alt="" />
      {render(signal.value.content.value)}
    </div>
  );
});
