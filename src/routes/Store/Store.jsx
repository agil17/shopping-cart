import { fetcherWithFetch } from "./getFunction";
import { useQuery } from "@tanstack/react-query";

import styles from "./Store.module.css";
import ProductItem from "../ProductItem/ProductItem";

function Store() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetcherWithFetch,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className={styles.store_container}>
      {data.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
					price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
}

export default Store;
