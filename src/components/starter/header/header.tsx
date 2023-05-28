import { component$, useContext, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { cartContext } from "~/routes/layout";
interface Props {
  brands: string[];
  categories: string[];
}

export default component$(({ brands, categories }: Props) => {
  const cart = useContext(cartContext);
  const open = useSignal(false);
  return (
    <div class="bg-white">
      <header class="relative bg-white">
        <nav aria-label="Top" class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="border-b border-gray-200 px-4 pb-14 sm:px-0 sm:pb-0">
            <div class="flex h-16 items-center justify-between">
              <div class="flex flex-1">
                <Link href="/">
                  <span class="sr-only">Your Company</span>
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </Link>
              </div>

              <div class="absolute inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch">
                <div class="flex h-14 space-x-8 overflow-x-auto border-t px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible sm:border-t-0 sm:pb-0">
                  <div class="flex">
                    <div class="relative flex">
                      <button
                        type="button"
                        class="border-transparent text-gray-700 hover:text-gray-800 relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                        aria-expanded="false"
                        onClick$={() => {
                          console.log("mamma", open.value);
                          open.value = !open.value;
                        }}
                      >
                        Catalogue
                      </button>
                    </div>

                    <div class=" absolute inset-x-0 top-full text-gray-500 sm:text-sm">
                      <div
                        class="absolute inset-0 top-1/2 bg-white shadow"
                        aria-hidden="true"
                      ></div>

                      <div
                        class={[
                          "relative bg-white z-10",
                          !open.value && "hidden",
                        ]}
                      >
                        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                          <div class="grid grid-cols-1 items-start gap-x-6 gap-y-10 pb-12 pt-10 md:grid-cols-2 lg:gap-x-8">
                            <div class="grid grid-cols-1 gap-x-6 gap-y-10 lg:gap-x-8">
                              <div>
                                <p
                                  id="clothing-heading"
                                  class="font-medium text-gray-900"
                                >
                                  Clothing
                                </p>
                                <div class="mt-4 border-t border-gray-200 pt-6 sm:grid sm:grid-cols-2 sm:gap-x-6">
                                  <ul
                                    role="list"
                                    aria-labelledby="clothing-heading"
                                    class="space-y-6 sm:space-y-4"
                                  >
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Tops
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Dresses
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Pants
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Denim
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Sweaters
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        T-Shirts
                                      </a>
                                    </li>
                                  </ul>
                                  <ul
                                    role="list"
                                    aria-label="More clothing"
                                    class="mt-6 space-y-6 sm:mt-0 sm:space-y-4"
                                  >
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Jackets
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Activewear
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Shorts
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Swimwear
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Browse All
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:gap-x-8">
                              <div>
                                <p
                                  id="accessories-heading"
                                  class="font-medium text-gray-900"
                                >
                                  Brands
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby="accessories-heading"
                                  class="mt-4 space-y-6 border-t border-gray-200 pt-6 sm:space-y-4"
                                >
                                  {brands.map((brand) => (
                                    <li class="flex" key={brand.brandName}>
                                      <a href="#" class="hover:text-gray-800">
                                        {brand.brandName}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <p
                                  id="categories-heading"
                                  class="font-medium text-gray-900"
                                >
                                  Categories
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby="categories-heading"
                                  class="mt-4 space-y-6 border-t border-gray-200 pt-6 sm:space-y-4"
                                >
                                  {categories.map((category) => (
                                    <li
                                      class="flex"
                                      key={category.categoryName}
                                    >
                                      <a href="#" class="hover:text-gray-800">
                                        {category.categoryName}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#"
                    class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Company
                  </a>
                  <a
                    href="#"
                    class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Stores
                  </a>
                </div>
              </div>

              <div class="flex flex-1 items-center justify-end">
                <a href="#" class="p-2 text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Search</span>
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </a>

                <div class="ml-4 flow-root lg:ml-8">
                  <Link href="/cart" class="group -m-2 flex items-center p-2">
                    <svg
                      class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      {cart.qty}
                    </span>
                    <span class="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
});
