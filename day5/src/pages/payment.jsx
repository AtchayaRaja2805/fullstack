import '/Users/atchayaraja/frontend/src/assets/css/payment.css'
import CustomNavbar from '/Users/atchayaraja/frontend/src/assets/components/CustomNavbar.jsx'
import CustomSidebar from '/Users/atchayaraja/frontend/src/assets/components/CustomSidebar.jsx'

function Payment()
{
    return(
       
    <div >
            <CustomNavbar/>
            <CustomSidebar/>
            <div className="container">
        <div className="card-container">
        <div className="left">
      <h1>Your Order</h1>
      <span />
      {/* <div className="order-items">
        <img
          src="https://img.pngio.com/charcoal-oil-combat-duo-the-man-company-product-png-1000_1000.png"
          alt=""
          srcSet=""
        />
        <div className="item">
          <span>Bovonto</span>
          <span>1 pcs</span>
        </div>
        <span className="item-price">$25</span>
      </div> */}
      {/* <div className="order-items">
        <img
          src="https://img.pngio.com/charcoal-oil-combat-duo-the-man-company-product-png-1000_1000.png"
          alt=""
          srcSet=""
        />
        <div className="item">
          <span>Wine</span>
          <span>1 pcs</span>
        </div>
        <span className="item-price">$25</span>
      </div> */}
      {/* <div className="order-items">
        <img
          src="https://img.pngio.com/charcoal-oil-combat-duo-the-man-company-product-png-1000_1000.png"
          alt=""
          srcSet=""
        />
        <div className="item">
          <span>Soda</span>
          <span>1 pcs</span>
        </div>
        <span className="item-price">$25</span>
      </div> */}
      <div className="total">
        <h2>Total</h2>
        <span className="price">$00.00</span>
      </div>
    </div>
    <div className="right">
      <h1>Payment</h1>
      <span />
      <div className="form-container">
        <form action="#" onsubmit="return false">
          <div className="payment-section">
            <label htmlFor="payment">Payment Method</label>
            <input type="text" name="payment" id="payment" placeholder='XXXX XXXX XXXX XXXX' />
          </div>
          <div className="input-items flex">
            <div className="marginright">
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" id="firstName" placeholder='First Name' />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" id="lastName" placeholder='Last Name'/>
            </div>
          </div>
          <div className="input-items">
            <label htmlFor="cardNumber">Card Number</label>
            <input type="text" name="cardNumber" id="cardNumber" placeholder='Card Number' />
          </div>
          <div className="input-items flex">
            <div>
              <label htmlFor="cardNumber">Expiration Date</label>
              <div className="flex marginright">
                <span className="marginright">
                  <input type="text" name="cardNumber" id="cardNumber" placeholder='DD' />
                </span>
                <input type="text" name="cardNumber" id="cardNumber" placeholder='MM' />
              </div>
            </div>
            <div>
              <label htmlFor="cardNumber">CVV</label>
              <input type="text" name="cardNumber" id="cardNumber" placeholder='CVV' />
            </div>
          </div>
          <div className="submit">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
    );
}
export default Payment