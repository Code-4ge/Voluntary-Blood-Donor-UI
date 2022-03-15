import './Footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footersec' id='upfooter'>
                <img src="#" alt="logo" />
                <section>
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fas fa-at"></i>
                    <i class="fab fa-telegram"></i>
                </section>
            </div>
            <hr />
            <div className='footersec' id='downfooter'>
                <p>© logo, 2021. We love our users!</p>
                <section>
                    <a href="#">Privacy & Policies</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="/about">About Us</a>
                    <a href="/#contact">Contact Us</a>
                </section>
            </div>
        </div>
    )
}
