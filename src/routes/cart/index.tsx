import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { createClient } from "@supabase/supabase-js";
import { createBrowserClient } from "supabase-auth-helpers-qwik";
import CartItem from "~/components/cart/cartItem";

// export const useDBTest = routeLoader$(async (requestEv) => {
//   const supabaseClient = createBrowserClient(
//     requestEv.env.get("PUBLIC_SUPABASE_URL")!,
//     requestEv.env.get("PUBLIC_SUPABASE_ANON_KEY")!
//   );
//   const { data } = await supabaseClient
//     .from("cartitems")
//     .select("products(*)")
//     .eq("cart_id", 2);
//   console.log("data", data);
//   return { data };
// });

export default component$(() => {
  //   const signal = useDBTest();
  const cartResource = useResource$<any>(({ track, cleanup }) => {
    // track(() => github.org);

    return getCart();
  });
  return (
    <main class="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Shopping Cart
      </h1>

      <form class="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
        <section aria-labelledby="cart-heading" class="lg:col-span-7">
          <h2 id="cart-heading" class="sr-only">
            Items in your shopping cart
          </h2>

          <ul
            role="list"
            class="divide-y divide-gray-200 border-b border-t border-gray-200"
          >
            {/* {signal.value.data?.map((item: any) => (
              <CartItem name={item.products.name} />
            ))} */}
            <Resource
              value={cartResource}
              onPending={() => <>Loading...</>}
              onRejected={(error) => <>Error: {error.message}</>}
              onResolved={({ data }) => {
                return (
                  <>
                    {data?.map((item: any) => (
                      <CartItem name={item.products.name} />
                    ))}
                  </>
                );
              }}
            />
          </ul>
        </section>

        <section
          aria-labelledby="summary-heading"
          class="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
        >
          <h2 id="summary-heading" class="text-lg font-medium text-gray-900">
            Order summary
          </h2>

          <dl class="mt-6 space-y-4">
            <div class="flex items-center justify-between">
              <dt class="text-sm text-gray-600">Subtotal</dt>
              <dd class="text-sm font-medium text-gray-900">$99.00</dd>
            </div>
            <div class="flex items-center justify-between border-t border-gray-200 pt-4">
              <dt class="flex items-center text-sm text-gray-600">
                <span>Shipping estimate</span>
                <a
                  href="#"
                  class="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                >
                  <span class="sr-only">
                    Learn more about how shipping is calculated
                  </span>
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </dt>
              <dd class="text-sm font-medium text-gray-900">$5.00</dd>
            </div>
            <div class="flex items-center justify-between border-t border-gray-200 pt-4">
              <dt class="flex text-sm text-gray-600">
                <span>Tax estimate</span>
                <a
                  href="#"
                  class="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                >
                  <span class="sr-only">
                    Learn more about how tax is calculated
                  </span>
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </dt>
              <dd class="text-sm font-medium text-gray-900">$8.32</dd>
            </div>
            <div class="flex items-center justify-between border-t border-gray-200 pt-4">
              <dt class="text-base font-medium text-gray-900">Order total</dt>
              <dd class="text-base font-medium text-gray-900">$112.32</dd>
            </div>
          </dl>

          <div class="mt-6">
            <button
              type="submit"
              class="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Checkout
            </button>
          </div>
        </section>
      </form>

      <section aria-labelledby="related-heading" class="mt-24">
        <h2 id="related-heading" class="text-lg font-medium text-gray-900">
          You may also like&hellip;
        </h2>

        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div class="group relative">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-related-product-01.jpg"
                alt="Front of Billfold Wallet in natural leather."
                class="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    Billfold Wallet
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">Natural</p>
              </div>
              <p class="text-sm font-medium text-gray-900">$118</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
});
export async function getCart(): Promise<any> {
  const supabaseUrl = "https://tehhclrcnixnmouseayj.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlaGhjbHJjbml4bm1vdXNlYXlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUyNjc1ODQsImV4cCI6MjAwMDg0MzU4NH0.DQD9P_rV3XeoJB2t8ChyTlVvDFsPOwj99kkpuMpeJds";
  const supabaseClient = createClient(supabaseUrl, supabaseKey);
  const { data } = await supabaseClient
    .from("cartitems")
    .select("products(*)")
    .eq("cart_id", 2);
  console.log("data", data);
  return { data };
}
