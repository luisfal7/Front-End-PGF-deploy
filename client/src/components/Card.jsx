import React from 'react'

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '35',
    color: 'Black',
    brand: 'Nike'
  },
  {
    id: 2,
    name: 'Basic Shirt',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '50',
    color: 'White',
    brand: 'Adidas'
  },
  {
    id: 3,
    name: 'Basic T-Shirt',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '80',
    color: 'Gray',
    brand: 'Jordan'
  },
  {
    id: 4,
    name: 'Female T-Shirt',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '70',
    color: 'Orange',
    brand: 'Dior'
  },
]

const Card = () => {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold text-[#00ff01] text-center py-6">Products</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
          <div key={product.id} className="group relative cursor-pointer">
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-xl group-hover:opacity-60 lg:aspect-none lg:h-80">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-lg text-bold text-white">
                  <a href={product.href}>
                    <span className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                  <p className="mt-1 text-sm text-white">{product.brand}</p>
                  <p className="mt-1 text-sm text-white">{product.color}</p>
              </div>
              <p className="text-3xl font-medium p-4 text-white">${product.price}</p>              
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card