export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="contact">
          <img
            className="footer-logo"
            src="/logo-footer.svg"
            alt=""
          />
          <ul>
            <li>
              <img src="/icon-1.png" />
              <span> </span>
              341 Londonderry Road,İstanbul Türkiye
            </li>
            <li>
              <img src="/icon-2.png" />
              <span> </span>
              aciktim@teknolojikyemekler.com
            </li>
            <li>
              <img src="/icon-3.png" />
              <span> </span>
              +90 216 123 45 67
            </li>
          </ul>
        </div>
        <div className="menus">
          <h4>Sıccacık Menüler</h4>
          <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>
        <div>
          <h4>Instagram</h4>
          <div className="instagram-container">
            <div>
              {" "}
              <img src="/li-0.png" />
            </div>
            <div>
              <img src="/li-1.png" />
            </div>
            <div>
              {" "}
              <img src="/li-2.png" />
            </div>
            <div>
              <img src="/li-3.png" />
            </div>
            <div>
              {" "}
              <img src="/li-4.png" />
            </div>
            <div>
              <img src="/li-5.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="social-icons-div">
        <div>
        <span>© 2023 Teknolojik Yemekler. </span>
        </div>
        <div className="social-icons">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-x-twitter"></i>
          <i class="fa-brands fa-facebook"></i>
        </div>
      </div>
    </footer>
  );
}
