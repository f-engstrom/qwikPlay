import { component$ } from "@builder.io/qwik";

interface Props {
  name: string;
}

export default component$(({ name }: Props) => {
  return (
    <li class="flex py-6 sm:py-10">
      <div class="flex-shrink-0">
        <img
          src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg"
          alt="Front of men&#039;s Basic Tee in sienna."
          class="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
        />
      </div>

      <div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div>
            <div class="flex justify-between">
              <h3 class="text-sm">
                <a
                  href="#"
                  class="font-medium text-gray-700 hover:text-gray-800"
                >
                  {name}
                </a>
              </h3>
            </div>
            <div class="mt-1 flex text-sm">
              <p class="text-gray-500">Sienna</p>
              <p class="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                Large
              </p>
            </div>
            <p class="mt-1 text-sm font-medium text-gray-900">$32.00</p>
          </div>

          <div class="mt-4 sm:mt-0 sm:pr-9">
            <label for="quantity-0" class="sr-only">
              Quantity, Basic Tee
            </label>
            <select
              id="quantity-0"
              name="quantity-0"
              class="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>

            <div class="absolute right-0 top-0">
              <button
                type="button"
                class="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
              >
                <span class="sr-only">Remove</span>
                <svg
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <p class="mt-4 flex space-x-2 text-sm text-gray-700">
          <svg
            class="h-5 w-5 flex-shrink-0 text-green-500"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clip-rule="evenodd"
            />
          </svg>
          <span>In stock</span>
        </p>
      </div>
    </li>
  );
});
