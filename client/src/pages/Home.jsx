import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import home1 from './home1.jpg';
import home2 from './home2.jpg';
import banner from './banner.avif';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className=' home'>
      <Header />
      <div className='banner'>
        <img src={banner} alt="logo" />
      </div>
      <div className='container home'> 
          <h2 className='page-heading'>Home</h2>
          <h2 className='choose'>Why Choose us?</h2>
          <p className='page-para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, obcaecati veniam quo provident, quidem, commodi qui similique optio eveniet animi aut! Facere laudantium officia, qui corporis placeat itaque temporibus? Magni sint vitae, beatae, dolorum reiciendis exercitationem incidunt mollitia aperiam dignissimos provident laborum eligendi eveniet. Laudantium assumenda reiciendis eligendi veniam nulla.</p>
          
      </div>
      <div></div>
      <div className='hundred back'>
        <div className='container flex'>
          <div className='flexchild1'>
            <h2>Heading 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officia aperiam qui rem eius, eum odit esse sapiente mollitia at repellendus distinctio iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, omnis unde voluptas nisi pariatur placeat dicta vel sequi odio beatae qui quisquam similique nostrum. Laboriosam officia hic quis suscipit ex nemo consequatur, quidem eos est dolorem, ad aut praesentium. Beatae! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad qui molestiae, cupiditate repudiandae dicta adipisci consectetur quos veritatis aliquam corrupti quod dolore sapiente quidem delectus ea maiores esse iure dolor facere voluptas hic porro magnam accusamus! Voluptatem fugiat impedit distinctio ad libero suscipit laudantium natus, reiciendis nam quibusdam eos sed enim aut.</p>
            <button className='button'><Link to="/product" style={{ color: '#fff', textDecoration: 'none' }}>Products</Link></button>
          </div>
          <div className='flexchild2'>
          <img  className='img2'src={home2} alt="home2" />
            <img className='img1' src={home1} alt="home1" />
          </div>
        </div>
        
      </div>
      <div className='container flex three-sec'>
          <div className='child'>
            <h3>Heading 3</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi officia voluptate asperiores blanditiis, pariatur est eum fugiat nostrum minus facere explicabo ea nisi. Ea, temporibus alias voluptas eligendi atque accusantium ratione, nam optio doloremque dolorem sed nemo sapiente quo eum commodi quam similique illo tempora dolores adipisci praesentium omnis quis.</p>
          </div>
          <div className='child'>
            <h3>Heading 3</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi officia voluptate asperiores blanditiis, pariatur est eum fugiat nostrum minus facere explicabo ea nisi. Ea, temporibus alias voluptas eligendi atque accusantium ratione, nam optio doloremque dolorem sed nemo sapiente quo eum commodi quam similique illo tempora dolores adipisci praesentium omnis quis.</p>
          </div>
          <div className='child'>
            <h3>Heading 3</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi officia voluptate asperiores blanditiis, pariatur est eum fugiat nostrum minus facere explicabo ea nisi. Ea, temporibus alias voluptas eligendi atque accusantium ratione, nam optio doloremque dolorem sed nemo sapiente quo eum commodi quam similique illo tempora dolores adipisci praesentium omnis quis.</p>
          </div>
        </div>
      <Footer/>
    </div>
  );
}

export default Home;
