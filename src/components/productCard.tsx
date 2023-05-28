import { component$ } from "@builder.io/qwik";

interface Props {
  id: string;
  name: string;
  description: string;
  price: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

export default component$(
  ({ id, href, imageAlt, imageSrc, name, price, description }: Props) => {
    return (
      <a key={id} href={href} class="group">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
          <img
            src={imageSrc}
            alt={imageAlt}
            class="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
          <h3>{name}</h3>
          <p>
            {price} {}kr
          </p>
        </div>
        <p class="mt-1 text-sm italic text-gray-500">{description}</p>
      </a>
    );
  }
);
