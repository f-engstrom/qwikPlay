import { component$, useContext } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { render } from "datocms-structured-text-to-html-string";
import { request } from "~/lib/dato";
import type { Product } from "~/models/models";
import { PRODUCT_QUERY } from "~/querys/querys";
import { cartContext } from "~/routes/layout";

const getProduct = routeLoader$(async (requestEvent): Promise<Product> => {
  const { product } = await request<{ product: Product }>({
    query: PRODUCT_QUERY,
    variables: {
      slug: requestEvent.params.slug,
      imagesHeight: 433,
      imagesWidth: 635,
    },
  });
  return product;
});
export default component$(() => {
  const signal = getProduct();
  const cart = useContext(cartContext);
  const htmlString = render(signal.value.description.value) || "";

  return (
    <>
      <div class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
        <div class="lg:col-span-5 lg:col-start-8">
          <div class="flex justify-between">
            <h1 class="text-xl font-medium text-gray-900">
              {signal.value.name}
            </h1>
            <p class="text-xl font-medium text-gray-900">
              {signal.value.price} kr
            </p>
          </div>
          <div class="mt-4">
            <h2 class="sr-only">Reviews</h2>
            <div class="flex items-center">
              <p class="text-sm text-gray-700">
                3.9
                <span class="sr-only"> out of 5 stars</span>
              </p>
              <div class="ml-1 flex items-center">
                <svg
                  class="text-yellow-400 h-5 w-5 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  class="text-yellow-400 h-5 w-5 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  class="text-yellow-400 h-5 w-5 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  class="text-yellow-400 h-5 w-5 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  class="text-gray-200 h-5 w-5 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div aria-hidden="true" class="ml-4 text-sm text-gray-300">
                ·
              </div>
              <div class="ml-4 flex">
                <a
                  href="#"
                  class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  See all 512 reviews
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
          <h2 class="sr-only">Images</h2>

          <div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
            <img
              src={signal.value.mainImage.url}
              alt="Back of women&#039;s Basic Tee in black."
              class="lg:col-span-2 lg:row-span-2 rounded-lg"
            />
            {signal.value.alternativeImages.map((image) => (
              <img
                src={image.url}
                alt="Side profile of women&#039;s Basic Tee in black."
                class="hidden lg:block rounded-lg"
              />
            ))}
          </div>
        </div>

        <div class="mt-8 lg:col-span-5">
          <form>
            <div>
              <h2 class="text-sm font-medium text-gray-900">Color</h2>

              <fieldset class="mt-2">
                <legend class="sr-only">Choose a color</legend>
                <div class="flex items-center space-x-3">
                  <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
                    <input
                      type="radio"
                      name="color-choice"
                      value="Black"
                      class="sr-only"
                      aria-labelledby="color-choice-0-label"
                    />
                    <span id="color-choice-0-label" class="sr-only">
                      Black
                    </span>
                    <span
                      aria-hidden="true"
                      class="h-8 w-8 bg-gray-900 rounded-full border border-black border-opacity-10"
                    ></span>
                  </label>

                  <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                    <input
                      type="radio"
                      name="color-choice"
                      value="Heather Grey"
                      class="sr-only"
                      aria-labelledby="color-choice-1-label"
                    />
                    <span id="color-choice-1-label" class="sr-only">
                      Heather Grey
                    </span>
                    <span
                      aria-hidden="true"
                      class="h-8 w-8 bg-gray-400 rounded-full border border-black border-opacity-10"
                    ></span>
                  </label>
                </div>
              </fieldset>
            </div>

            <div class="mt-8">
              <div class="flex items-center justify-between">
                <h2 class="text-sm font-medium text-gray-900">Size</h2>
                <a
                  href="#"
                  class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  See sizing chart
                </a>
              </div>

              <fieldset class="mt-2">
                <legend class="sr-only">Choose a size</legend>
                <div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
                  <label class="flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                    <input
                      type="radio"
                      name="size-choice"
                      value="XXS"
                      class="sr-only"
                      aria-labelledby="size-choice-0-label"
                    />
                    <span id="size-choice-0-label">XXS</span>
                  </label>

                  <label class="flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                    <input
                      type="radio"
                      name="size-choice"
                      value="XS"
                      class="sr-only"
                      aria-labelledby="size-choice-1-label"
                    />
                    <span id="size-choice-1-label">XS</span>
                  </label>

                  <label class="flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                    <input
                      type="radio"
                      name="size-choice"
                      value="S"
                      class="sr-only"
                      aria-labelledby="size-choice-2-label"
                    />
                    <span id="size-choice-2-label">S</span>
                  </label>

                  <label class="flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                    <input
                      type="radio"
                      name="size-choice"
                      value="M"
                      class="sr-only"
                      aria-labelledby="size-choice-3-label"
                    />
                    <span id="size-choice-3-label">M</span>
                  </label>

                  <label class="flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                    <input
                      type="radio"
                      name="size-choice"
                      value="L"
                      class="sr-only"
                      aria-labelledby="size-choice-4-label"
                    />
                    <span id="size-choice-4-label">L</span>
                  </label>

                  <label class="flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1 cursor-not-allowed opacity-25">
                    <input
                      type="radio"
                      name="size-choice"
                      value="XL"
                      disabled
                      class="sr-only"
                      aria-labelledby="size-choice-5-label"
                    />
                    <span id="size-choice-5-label">XL</span>
                  </label>
                </div>
              </fieldset>
            </div>

            <button
              type="button"
              onClick$={() => cart.add()}
              class="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to cart
            </button>
          </form>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">Description</h2>

            <div
              class="prose prose-sm mt-4 text-gray-500"
              dangerouslySetInnerHTML={htmlString}
            />
          </div>

          <div class="mt-8 border-t border-gray-200 pt-8">
            <h2 class="text-sm font-medium text-gray-900">Fabric &amp; Care</h2>

            <div class="prose prose-sm mt-4 text-gray-500">
              <ul role="list">
                <li>Only the best materials</li>
                <li>Ethically and locally made</li>
                <li>Pre-washed and pre-shrunk</li>
                <li>Machine wash cold with similar colors</li>
              </ul>
            </div>
          </div>

          <section aria-labelledby="policies-heading" class="mt-10">
            <h2 id="policies-heading" class="sr-only">
              Our Policies
            </h2>

            <dl class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div class="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                <dt>
                  <svg
                    class="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
                    />
                  </svg>
                  <span class="mt-4 text-sm font-medium text-gray-900">
                    International delivery
                  </span>
                </dt>
                <dd class="mt-1 text-sm text-gray-500">
                  Get your order in 2 years
                </dd>
              </div>
              <div class="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                <dt>
                  <svg
                    class="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span class="mt-4 text-sm font-medium text-gray-900">
                    Loyalty rewards
                  </span>
                </dt>
                <dd class="mt-1 text-sm text-gray-500">
                  Don&#039;t look at other tees
                </dd>
              </div>
            </dl>
          </section>
        </div>
      </div>

      <section aria-labelledby="reviews-heading" class="mt-16 sm:mt-24">
        <h2 id="reviews-heading" class="text-lg font-medium text-gray-900">
          Recent reviews
        </h2>

        <div class="mt-6 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10">
          <div class="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
            <div class="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
              <div class="flex items-center xl:col-span-1">
                <div class="flex items-center">
                  <svg
                    class="text-yellow-400 h-5 w-5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <svg
                    class="text-yellow-400 h-5 w-5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <svg
                    class="text-yellow-400 h-5 w-5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <svg
                    class="text-yellow-400 h-5 w-5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <svg
                    class="text-yellow-400 h-5 w-5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <p class="ml-3 text-sm text-gray-700">
                  5<span class="sr-only"> out of 5 stars</span>
                </p>
              </div>

              <div class="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                <h3 class="text-sm font-medium text-gray-900">
                  Can&#039;t say enough good things
                </h3>

                <div class="mt-3 space-y-6 text-sm text-gray-500">
                  <p>
                    I was really pleased with the overall shopping experience.
                    My order even included a little personal, handwritten note,
                    which delighted me!
                  </p>
                  <p>
                    The product quality is amazing, it looks and feel even
                    better than I had anticipated. Brilliant stuff! I would
                    gladly recommend this store to my friends. And, now that I
                    think of it... I actually have, many times!
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
              <p class="font-medium text-gray-900">Risako M</p>
              <time
                dateTime="2021-01-06"
                class="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
              >
                May 16, 2021
              </time>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="related-heading" class="mt-16 sm:mt-24">
        <h2 id="related-heading" class="text-lg font-medium text-gray-900">
          Customers also purchased
        </h2>

        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div class="group relative">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg"
                alt="Front of men&#039;s Basic Tee in white."
                class="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    Basic Tee
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">Aspen White</p>
              </div>
              <p class="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});
