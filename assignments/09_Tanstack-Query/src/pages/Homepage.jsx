import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import api from "../api/api";
import Page from "../components/Page";

function Homepage() {
  // const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);

  //   async function init() {
  //     try {
  //       const products = await api.products.getProducts();
  //       setProducts(products);

  //       setIsSuccess(true);
  //     } catch (e) {
  //       setIsError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   init();
  // }, []);

  // if (isLoading) return <Page>loading...</Page>;
  // if (isError) return <Page>error...</Page>;

  const {
    data: products,
    isLoading: productIsLoading,
    isError: productIsError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => api.products.getProducts(),
  });
  if (productIsLoading) return <Page>loading...</Page>;
  if (productIsError) return <Page>error...</Page>;

  return (
    <Page>
      <ol>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ol>
    </Page>
  );
}

export default Homepage;
