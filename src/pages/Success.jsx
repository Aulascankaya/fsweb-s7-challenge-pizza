import React from "react";
import { useLocation } from "react-router-dom";

function Success() {

  const location = useLocation();
  const form = location.state || {};
  return (
    <div className="orderSuccess">
      <img src="./Assets/mile1-assets/tek-yemek.png" alt="logo" />
      <p>TEBRİKLER!</p>
      <p>SİPARİŞİNİZ ALINDI!</p>
      <main>
        <div className="order-summary">
         
          <p><strong>Boyut:</strong> {form.pizzaSize}</p>
          <p><strong>Hamur:</strong> {form.pizzaHamur}</p>
          <p><strong>Ek Malzemeler:</strong> {form.ekMalzeme.join(', ')}</p>
          <p><strong>Adres:</strong> {form.address}</p>
        </div>
        <div className="order-total">
          <h3>Sipariş Toplamı</h3>
          <p><strong>Seçimler:</strong> {form.ekMalzeme.length * 5}₺</p>
          <p><strong>Toplam:</strong> {form.totalPrice}₺</p>
        </div>
      </main>
    </div>
  );
}

export default Success;
