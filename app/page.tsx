import Image from 'next/image'
import { useState } from 'react'
import Variant from './Variant';

export default function Home() {
  const { name, description, image, variants } ={
    name: "Iphone 14",
    description: "Product Description",
    image: "product_image.jpg",
    variants: [
      {
        id: 1,
        name: "Variant Name 1",
        price: 19.99,
        quantity: 10,
        options: [
          {
            name: "Color",
            value: "Red"
          },
          {
            name: "Size",
            value: "Small"
          }
        ]
      },
      {
        id: 2,
        name: "Variant Name 2",
        price: 24.99,
        quantity: 5,
        options: [
          {
            name: "Color",
            value: "Blue"
          },
          {
            name: "Size",
            value: "Medium"
          }
        ]
      }
    ]
  };

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
       <h1>{name}</h1>
      <p>{description}</p>

       {variants.map(variant => (
        <Variant key={variant.id} {...variant} />
      ))}


    </main>
  )
}
