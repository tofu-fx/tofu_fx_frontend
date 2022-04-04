import React from 'react';
import axios from 'axios';

import NavigateBar from './NavigateBar.js';
import ProductCard from './ProductCard.js';
import Footer from './Footer.js';

import '../css/ShopCategory.css';


class ShopCategory extends React.Component {
  state = {
    shop_title: this.props.main_title,
    category: "",
    products: [],
    product_quantity: 0
  }

  componentDidMount() {
    let google_sheet_id = "1dezRYzkCZ8VrfsbO2EKVoF9D_hIHsKAF_BuI7b83phA";
    let selection_1 = "A25";
    let selection_2 = "G50";

    // FETCH ALL PRODUCTS
    axios.get(`https://tofufx-backend.herokuapp.com/google_sheets/${selection_1}/${selection_2}/${google_sheet_id}?api_key=${process.env.REACT_APP_TOFU_BACKEND_API_KEY}`)
      .then(response => {

        const all_products = response.data.values.map(product => {
          return {
            id: product[0],
            price: product[1],
            download_link: product[2],
            title: product[3],
            category: product[4],
            description: product[5],
            display_img: product[6]
          }
        })

        const products = all_products.filter(product => {
          return (product.category === this.props.category && product.title && product.download_link && product.price && product.category && product.description && product.display_img)
        })

        const product_quantity = products.length;
        const category = this.props.category;

        this.setState({ products, product_quantity, category});
    })
  }

  render() {
    return(
      <div className="shop-category">
        <NavigateBar/>
        <div className="title">
          {this.state.shop_title}
        </div>

        <div className="products">
          <div className="inner">
            <div className="results">
              { this.state.product_quantity } results
            </div>
            {
              this.state.products.map(product => {
                return( <ProductCard product_data={product}/> )
              })
            }
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default ShopCategory;
