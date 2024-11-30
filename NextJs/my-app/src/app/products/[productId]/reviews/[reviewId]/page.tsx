
const Page   = ({params}:{
    params:{
        productId:string;
        reviewId:string;
    }
    
}) => {
  return (
    <div>
      review for {params.reviewId} of product {params.productId}
    </div>
  )
}

export default Page
