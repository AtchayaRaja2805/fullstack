import '/Users/atchayaraja/frontend/src/assets/css/payment.css'
import CustomNavbar from '/Users/atchayaraja/frontend/src/assets/components/CustomNavbar.jsx'
import CustomSidebar from '/Users/atchayaraja/frontend/src/assets/components/CustomSidebar.jsx'

function Payment()
{
    return(
       
    <div className="payment-body" >
            <CustomNavbar/>
            <div className="payment-container">
        <div className="card-container">
        <div className="left">
      <h1>Your Order</h1>
      <span />
      
     
      
      <div className="total">
        <h2>Total</h2>
        <span className="price">$00.00</span>
      </div>
    </div>
    <div className="right">
      <h1>Payment</h1>
      <span />
      <div className="form-container">
        <form id="payment-form"action="#" onsubmit="return false">
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