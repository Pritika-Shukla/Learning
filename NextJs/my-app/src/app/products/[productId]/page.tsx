const Page = ({ params }: { params: { productId: string } }) => {
    return (
      <div>
        Details of product {params.productId}
      </div>
    );
  };
  
  export default Page;
  