import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { PAGE_QUERY } from "~/querys/querys";
import type { StructuredTextDocument } from "datocms-structured-text-to-html-string";
import { render } from "datocms-structured-text-to-html-string";

interface Page {
  title: string;
  mainImage: { url: string };
  content: { value: StructuredTextDocument };
}

export const getPageFromDato = routeLoader$(
  async (requestEvent): Promise<Page> => {
    // This code runs only on the server, after every navigation
    const req = await fetch(`https://graphql.datocms.com/`, {
      method: "POST",
      headers: {
        authorization: `Bearer 6cd8fe5d5bbe8d5fa2500baffe1f81`,
      },
      body: JSON.stringify({
        query: PAGE_QUERY,
        variables: {
          pageSlug: requestEvent.params.slug,
          mainImageHeight: 400,
        },
      }),
    });
    const {
      data: { page },
    } = await req.json();
    console.log(page);
    // @ts-ignore
    // const { page } = await request({
    // query: PAGE_QUERY,
    //variables: {
    // pageSlug: requestEvent.params.slug,
    //mainImageHeight: 400,
    // },
    // preview: false,
    //});

    return page;
  }
);

export default component$(() => {
  const signal = getPageFromDato();
  const htmlString = render(signal.value.content.value) || "";

  return (
    <div class="flex flex-col items-center justify-center">
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>
      <div class="container container-center container-spacing-xl">
        <h3>{signal.value.title}</h3>
      </div>
      <img src={signal.value.mainImage.url} alt="" />
      <div dangerouslySetInnerHTML={htmlString}></div>
      {}
    </div>
  );
});
