import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { PAGE_QUERY } from "~/querys/querys";
import type { StructuredTextDocument } from "datocms-structured-text-to-html-string";
import { render } from "datocms-structured-text-to-html-string";
import { request } from "~/lib/dato";

interface Page {
  title: string;
  mainImage: { url: string };
  content: { value: StructuredTextDocument };
  errorMessage?: string;
}

export const getPageFromDato = routeLoader$(
  async (requestEvent): Promise<Page> => {
    const { page } = await request<Page>({
      query: PAGE_QUERY,
      variables: {
        pageSlug: "about",
        mainImageHeight: 400,
      },
    });
    if (!page) {
      return requestEvent.fail(404, { errorMessage: "sidan finns inte" });
    }
    return page;
  }
);

export default component$(() => {
  const signal = getPageFromDato();

  if (signal.value.errorMessage) {
    return <div>{signal.value.errorMessage}</div>;
  }

  const htmlString = render(signal.value.content.value) || "";
  return (
    <div class="flex flex-col items-center justify-center">
      <div class="container container-center container-spacing-xl">
        <h3>{signal.value.title}</h3>
      </div>
      <img src={signal.value.mainImage.url} alt="" />
      <div dangerouslySetInnerHTML={htmlString}></div>
      {}
    </div>
  );
});
