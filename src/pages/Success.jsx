import React from "react";
import { useLocation } from "react-router-dom";

function Success() {
  const location = useLocation();
  const form = location.state || {};

  return (
    <div className="orderSuccess">
      <header className="orderSuccess-text">
      <h2>lezzetin yolda</h2>
      <h3>SİPARİŞ ALINDI</h3>
      </header>
      <hr />
      <div className="acıPizza">
        <p>Position Absolute Acı Pizza</p>
      </div>
      <hr />

      <main className="orderDetails">
        <ul >
          <li>
            <strong>Boyut:</strong> {form.pizzaSize}
          </li>
          <li>
            <strong>Hamur:</strong> {form.pizzaHamur}
          </li>
          <li>
            <strong>Ek Malzemeler:</strong> {form.ekMalzeme.join(", ")}
          </li>
          <li>
            <strong>Adres:</strong> {form.address}
          </li>
          <li>
            <strong>Sipariş Notu:</strong> {form.siparisNotu}
          </li>
        </ul>
        <div className="orderTotal">
          <p>Sipariş Toplamı</p>
          <p>
            <strong>Seçimler:</strong> {form.ekMalzeme.length * 5}₺
          </p>
          <p>
            <strong>Toplam:</strong> {form.totalPrice}₺
          </p>
        </div>
      </main>
    </div>
  );
}

export default Success;
