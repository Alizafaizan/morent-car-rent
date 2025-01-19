import Image from "next/image";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { FaCarSide, FaCogs, FaUser } from "react-icons/fa";

interface IProduct {
  name: string;
  title?: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  description?: string;
  pricePerDay: number;
  type?: string;
  fuelCapacity?: string;
  transmission?: string;
  seatingCapacity?: string;
}

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source).url();
}

export default async function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  // Fetch product data based on the slug
  const product: IProduct = await client.fetch(
    `*[_type == "car" && slug.current == $slug][0]`,
    { slug: params.slug }
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="max-w-screen-lg mx-auto px-6 py-8 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative w-full h-96">
          {product.image && product.image.asset ? (
            <Image
              src={urlFor(product.image).toString()}
              alt={product.title || "Product Image"}
              fill
              className="object-contain"
            />
          ) : (
            <div className="h-96 bg-gray-200 flex items-center justify-center rounded-lg">
              <p className="text-center text-gray-600">No Image Available</p>
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold">{product.title || product.name}</h1>
          <p className="text-gray-700">{product.description || "No description available."}</p>

          <div className="flex items-center space-x-4 text-gray-600">
            <div className="flex items-center space-x-2">
              <FaCarSide />
              <span>Fuel: {product.fuelCapacity || "N/A"}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCogs />
              <span>Transmission: {product.transmission || "N/A"}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaUser />
              <span>Seats: {product.seatingCapacity || "N/A"}</span>
            </div>
          </div>

          <p className="text-xl font-bold">
            Price: ${product.pricePerDay}/day
          </p>

          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
}

// Generate static paths
export async function generateStaticParams() {
    const products = await client.fetch(
      `*[_type == "car"]{
        slug {
          current
        }
      }`
    );
  
    console.log("Products fetched from Sanity:", products);
  
    const validProducts = products.filter(
      (product: any) => product.slug && product.slug.current
    );
  
    return validProducts.map((product: any) => ({
      slug: product.slug.current,
    }));
  }
  
