import React, { useState, PureComponent, Fragment } from 'react';
import getStripe from "../../utils/stripejs"
import Img from "gatsby-image"
import { slugify } from "../../utils/functions"

const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  })
  return numberFormat.format(price)
}

const ProductCard = ({ product, img }) => {
  const [loading, setLoading] = useState(false)

  const productClass = slugify(product.name.split(' - ')[1])

  class PriceSelect extends PureComponent {
    state = {}

    handleChange = (event) => {
      this.setState({ value: event.target.value });
    };

    render() {
      const { value } = this.state;

      //get the price of the first product in the object as selected by default
      let priceLabel = formatPrice(product.prices[0].unit_amount, product.prices[0].currency)

      //set default colorClass for frame colour
      let colorClass = ""
      //set to natural if product is a frame
      if (productClass === "framed-and-mounted-print") {
        colorClass = " black-frame"
      }

      if (value) {
        //filter the object to just the selected product id
        let price = product.prices.filter(obj => {
          return obj.id === value
        })

        //get the new price
        priceLabel = formatPrice(price[0].unit_amount, price[0].currency)

        //if product is a framed print
        if (productClass === "framed-and-mounted-print") {
          //check which colour frame was selected
          colorClass = " " + slugify(price[0].nickname.split(' - ')[1])
        }

      } 

      const productName = product.name.split(' - ')

      return (
        <Fragment>
          <Img
              className={'artwork ' + productClass + colorClass}
              fluid={img} 
            />
          <h4>{productName[0]}<br/><span className="small">{productName[1]}</span></h4>
          <p className="shop__product__description">{product.description}</p>
          <span className="shop__product__price">{priceLabel}</span>
          <label className="shop__product__label" aria-label="Size">
            <select className="shop__product__select" name="priceSelect" onChange={this.handleChange} value={value}>
              {product.prices.map(price => (
                <option key={price.id} value={price.id}>
                  {price.nickname}
                </option>
              ))}
            </select>
          </label>
        </Fragment>
      );
    }
  }


  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)

    const price = new FormData(event.target).get("priceSelect")
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price, quantity: 1 }],
      successUrl: `${window.location.origin}/astrophotography/`,
      cancelUrl: `${window.location}`,
    })

    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }

  return (
    <div class="shop__product">
      <form onSubmit={handleSubmit}>
        <fieldset style={{ border: "none" }}>
          <PriceSelect/>
        </fieldset>
        <button className="button" disabled={loading}>BUY NOW</button>
      </form>
    </div>
  )
}

export default ProductCard