
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Product = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h1 className='main-h1'>Our Products</h1>
        <div className="row mt-5 main-div">
          <div className="col-md-6 form-div"><ProductForm /></div>
          <div className="col-md-1"></div>
          <div className="col-md-5 product-div"><ProductList /></div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Product;
