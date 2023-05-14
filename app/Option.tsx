import Image from 'next/image'
import { useState } from 'react'

export default function Option(props:any) {
    const { name, value } = props;
    return (
        <p>{name}: {value}</p>
      );
}

