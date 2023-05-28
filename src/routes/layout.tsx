import type { QRL } from "@builder.io/qwik";
import {
  component$,
  createContextId,
  Slot,
  useContextProvider,
  useStore,
  $,
} from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import Header from "~/components/starter/header/header";
import Footer from "~/components/starter/footer/footer";

import { request } from "~/lib/dato";
import { CATALOGUE_QUERY } from "~/querys/querys";

export const getPageFromDato = routeLoader$(
  async (requestEvent): Promise<Page> => {
    const page = await request<Page>({
      query: CATALOGUE_QUERY,
    });
    if (!page) {
      return requestEvent.fail(404, { errorMessage: "sidan finns inte" });
    }
    return page;
  }
);
type CartStore = { qty: number; add: QRL<(this: CartStore) => void> };
export const cartContext = createContextId<CartStore>("cart.context");

export default component$(() => {
  const signal = getPageFromDato();
  const cart = useStore({
    qty: 1,
    add: $(function (this: CartStore) {
      console.log("add", this.qty);
      this.qty++;
    }),
  });
  useContextProvider(cartContext, cart);
  return (
    <>
      <Header
        brands={signal.value.allBrands}
        categories={signal.value.allCategories}
      />
      <main class="mx-auto mt-8 max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
