export default function Footer() {
    return (
    <section className="footer">
        <div className="footer-logo">
            <img src="/images/Logo-white.png" alt="Logo" className="relative ml-48 pt-24  " />
        </div>   

        <p className="text-zinc-300 font-inter ml-48 my-7 w-96">
            We are a residential interior design firm located in Portland. Our boutique-studio offers more than
        </p>
        <div className="social-icons ml-48 mt-48">
            <img src="/images/Social icons.png" alt="social.icons" className="social-icons"/>
        </div>

        <div className="services flex justify-evenly -mt-80">
        <ul className="first text-zinc-300 ml-96">
        <h3 className="font-inter text-lg text-white font-semibold mb-5">Services</h3>

            <li className="mb-4">Bonus program</li>
            <li className="mb-4">Gift cards</li>
            <li className="mb-4">Credit and payment</li>
            <li className="mb-4">Service contracts</li>
            <li className="mb-4">Non-cash account</li>
            <li className="mb-4">Payment</li>
            </ul>

            <ul className="second text-zinc-300 -ml-28">
            <h3 className="font-inter text-lg text-white font-semibold mb-5">Assistance to the buyer</h3>

            <li className="mb-4">Find an order</li>
            <li className="mb-4">Terms of delivery</li>
            <li className="mb-4">Exchange and return of goods</li>
            <li className="mb-4">Guarantee</li>
            <li className="mb-4">Frequently asked questions</li>
            <li className="mb-4">Terms of use of the site</li>
            </ul>

        </div>
  
   
    </ section>
    
  
    );
  }