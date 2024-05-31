
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import banner from './product.jpg'

const Product = () => {
  return (
    <>
      <Header />
      <div className='banner'>
        <img src={banner} alt="logo" />
      </div>
      <div className='container home'> 
          <h2 className='page-heading'>Products</h2>
          <div className='padding'></div>
      </div>
      <div className="container">
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
