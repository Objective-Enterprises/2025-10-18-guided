import { GetServerSideProps } from "next";
import { items } from "../../lib/food";
import { FoodItem } from "../../types";
import Image from "next/image";
import Link from "next/link";

export default function MenuPage(props: {
  items: FoodItem[]
}) {
  console.log('props', props)
  const items = props.items.map(item => {
    const href = `/menu/${item.id}`
    return (
      <Link href={href}>
        <div key={item.id} className='menu-item'>
          <Image alt={item.name} src={item.image} width={300} height={200} />
          <div>
            <h1>{item.name}</h1>
            <p>${item.price}</p>
          </div>
        </div>
      </Link>
    )
  })

  return (
    <div className="container">
      {items}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  console.log('getServerSideProps items', items)
  return {
    props: {
      items
    }
  }
}