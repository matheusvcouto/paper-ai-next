import React from 'react'

interface propsParams {
  params: {
    slug: string
  }
}

export default function Page({ params }: propsParams) {
  return <div>Page: {params.slug}</div>
}

