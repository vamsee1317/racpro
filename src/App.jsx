// import Header from './components/organisms/Header';
// import Footer from './components/organisms/Footer';
// import PromoBanner from './components/organisms/PromoBanner';
// import FeaturedProductsSection from './components/organisms/FeaturedProductsSection';
// import ConditionalRenderingDemo from './components/concepts/cr/ConditionalRenderingDemo';
// import StudentList from './components/concepts/listsKeys/ListKeysDemo';
// import EventHandlingDemo from './components/concepts/events/EventHandlingDemo';
// import SignUp from './components/concepts/form/SignUp';
// import UseEffectDemo from './components/concepts/hooks/useEffect/UseEffectDemo';
// import UseRefDemo from './components/concepts/hooks/useRef/UseRefDemo';
// import FormWithState from './components/concepts/hooks/useRef/FormWithState';
// import FormWithRef from './components/concepts/hooks/useRef/FormWithRef';
// import AxiosDemo from './components/concepts/axios/AxiosDemo';
// import FetchDemo from './components/concepts/axios/FetchDemo';

import AxiosCrud from "./components/concepts/axios/AxiosCrud";
import TodosPagination from "./components/concepts/axios/TodosPagination";




const App = () => {
  const products = [
    {
      name: 'Noise Wireless Headphones',
      price: 1999,
      inStock: true,
      image: 'https://via.placeholder.com/300x200?text=Headphones'
    },
    {
      name: 'Smart Watch Pro',
      price: 3499,
      inStock: true,
      image: 'https://via.placeholder.com/300x200?text=Smart+Watch'
    },
    {
      name: 'Bluetooth Speaker',
      price: 999,
      inStock: false,
      image: 'https://via.placeholder.com/300x200?text=Speaker'
    }
  ];

  const brandName = "ShopSmart";

  return (
    <>
      {/* <Header title={brandName} />
      <PromoBanner />
      <FeaturedProductsSection products={products} />
      <ConditionalRenderingDemo />
      <StudentList />
      <EventHandlingDemo />
      <SignUp />
      <UseEffectDemo />
      <UseRefDemo />
      <FormWithState />
      <FormWithRef />
      <FetchDemo />
      <AxiosDemo />
      <Footer year={new Date().getFullYear()} /> */}
      <TodosPagination />
      <AxiosCrud />
    </>
  );
};

export default App;