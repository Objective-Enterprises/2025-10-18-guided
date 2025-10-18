import { GetServerSideProps } from "next";
import { items } from "../../lib/food";
import { FoodItem } from "../../types";
import Image from "next/image";
import Link from "next/link";

export default function MenuIdPage (props: {
  item: FoodItem
}) {
  return (
    <div className="dish-details-container">
      <h1>{props.item.name}</h1>
      <div className='dish-image'>
        <Image
          alt={props.item.name}
          src={props.item.image}
          width={600}
          height={400}
        />
      </div>
      <p>{props.item.ingredients.join(', ')}</p>
      <p>${props.item.price}</p>
      <Link href='/menu'>Menu</Link>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.params?.id)
  const item = items.find(item => item.id === context.params?.id)
  return {
    props: {
      item
    }
  }
}