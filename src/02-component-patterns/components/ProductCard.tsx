import { ReactElement, createContext, useContext } from 'react';
import styles from '../styles/styles.module.css';
import useProduct from '../hooks/useProduct';
import noImage from '../assets/no-image.jpg';

interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: (value: number) => void;
}

const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductImage = ({ img = '' }) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return <img className={styles.productImg} src={imgToShow} alt='coffe-mug' />;
};

// cuando solo es una propiedad podemos usar así y no con interface
export const ProductTitle = ({ title }: { title: string }) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={styles.productDescription}>
      {title ? title : product.title}
    </span>
  );
};

export const ProductButtons = () => {
  const { increaseBy, counter } = useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  );
};

const ProductCard = ({ product, children }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>
        {children}
        {/* <ProductImage img={product.img} />
        <ProductTitle title={product.title} />
        <ProductButtons increaseBy={increaseBy} counter={counter} /> */}
      </div>
    </Provider>
  );
};

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Button = ProductButtons;

export default ProductCard;
