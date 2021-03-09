import React from "react"
import "./payment.styles.scss"
import Card from '../../images/Card.png'
import PaymentPic from '../../images/payment.png';
function Payment() {
  return (
    <div className='container'>
      <div className="master-card">
        <div className="card-heading">
          Apply today for the Jasper Mastercard
        </div>
        <div className='card-image'>
            <img src={Card} alt="card" />
        </div>
        <div className='annual-fee-container'>
           <div className='fee-text'> annual fee</div>
           <div className='fee-value'> $0</div>
           <div className='fee-description'> late and returned payment fees may apply  </div>
        </div>
        <div className='apply-button-container' >
          <div>
          <button className='apply-button'>Apply Now</button>
          </div>
        </div>
        <div className='learn-more'>
          <div> learn more</div>
          <span> Rewards program  |  Terms and Conditions </span>
        </div>
        <div>
            <img className='payment-methods' src={PaymentPic} alt="payment"/>
        </div>
      </div>
      
      <div className='right-container'>
       <div className='signup-bonus-container'>
         <div className='sign-up-bonus-header'> $50 Signup bonus!</div>
         <div className='blue-line'></div>
         <div className='signup-bonus-text'>
          <p>Use promo code <span>JASPERPROMO</span> to receive a $50  credit to your Jasper account upon activation, if approved</p>
         </div>
         <div className='singup-bonus-footer'>
            Terms apply
         </div>
       </div>

       <div className='cash-back-container'>
         <div className='cash-back-header-info-wrapper' > 
        <div className='cash-back-heading'>
          Up to 6% cash back by referring friends!
        </div>
        <div className='blue-line'></div>
        <div className='cash-back-text'>
          Start at 1% and receive an additional 0.5% cash back for for a full year for each successful referral 
        </div>
        </div>
        <div className='cach-back-specs-wrapper'>
            <div className='cash-specs-1'>
            <p> Cash back on almost all purchases, not just certain categories </p>
            <span className='green-blue-color' > Terms apply</span>
            </div>
               
          <div className='cash-specs-1' >
            Cash Back is automatically applied to your statement after three on time payments
          </div>
        </div>
       </div>
       
    
      </div>
    </div>
  )
}

export default Payment
