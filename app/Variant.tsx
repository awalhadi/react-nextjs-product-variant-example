import Image from 'next/image'
import { useState } from 'react'
import Option from './Option';

export default function Variant(props:any) {
    const { name, price, quantity, options } = props;
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>Quantity: {quantity}</p>

      {options.map(option => (
        <Option key={option.name} {...option} />
      ))}
    </div>

  )
}
