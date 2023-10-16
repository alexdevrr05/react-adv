import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from '../components/ProductCard';

const product = {
  id: '1',
  title: 'Coffe mug card',
  img: './coffee-mug.png',
};

const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {/* compound component pattern */}
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={'Coffe'} />
          <ProductCard.Button />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title={''} />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
