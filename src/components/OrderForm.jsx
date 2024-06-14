import { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import Check from "./Check";
import Counter from "./Counter";

const initialForm = {};

const malzemeler = [
  { value: "pepperoni", label: "Pepperoni" },
  { value: "sosis", label: "Sosis" },
  { value: "kanada jambonu", label: "Kanada Jambonu" },
  { value: "tavuk ızgara", label: "Tavuk Izgara" },
  { value: "soğan", label: "Soğan" },
  { value: "domates", label: "Domates" },
  { value: "mısır", label: "Mısır" },
  { value: "sucuk", label: "Sucuk" },
  { value: "jalepeno", label: "Jalepeno" },
  { value: "sarımsak", label: "Sarımsak" },
  { value: "biber", label: "Biber" },
  { value: "ananas", label: "Ananas" },
  { value: "kabak", label: "Kabak" },
  { value: "brokoli", label: "Brokoli" },
  { value: "zeytin", label: "Zeytin" },
];

export default function OrderForm() {
  const [form, setForm] = useState(initialForm);

  // handleChange fonksiyonu
  const handleChange = (event) => {};
  //handleSubmit fonksiyonu
  const handleSubmit = (e) => {};

  //form elemanları

  return (
    <>
      <header className="header">
        <img src="./Assets/mile1-assets/tek-yemek.png" alt="logo" />
      </header>
      <Form className="formContainer" onSubmit={handleSubmit}>
        <h3>Position Absolute Acı Pizza</h3>
        <div class="rating-container">
          <div class="price">85.50₺</div>
          <div class="rating">
            <span>4.9</span>
            <span>(200)</span>
          </div>
        </div>

        <p className="infoText">
          Frontent Dev olarak hala position:absolute kullaniyorsan bu çok acı
          pizza tam sana göre. Pizza. domates, peynir ve genellikle çeşitli
          diger malzemelerle kaplanmış. daha sonra geleneksel olarak odun
          ateşinde bir firinda yüksek sicaklkta pişirilen, genellikle yuvarlak,
          düzieştirilmiş mayalı bugday bazlı hamurdan oluşan italyan kökenli
          lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
        </p>
        <div className="pizza-size-container">
          <div className="pizza-size-card">
            <h3>
              Boyut Seç <span>*</span>
            </h3>
            <FormGroup>
              <Input
                type="radio"
                name="pizzaSize"
                value="Küçük"
                onChange={handleChange}
                checked={form.pizzaSize === "Küçük"}
              />
              <Label htmlFor="küçük">Küçük</Label>
            </FormGroup>

            <FormGroup>
              <Input
                type="radio"
                name="pizzaSize"
                value="Orta"
                onChange={handleChange}
                checked={form.pizzaSize === "Orta"}
              />
              <Label htmlFor="orta">Orta</Label>
            </FormGroup>

            <FormGroup>
              <Input
                type="radio"
                name="pizzaSize"
                value="Büyük"
                onChange={handleChange}
                checked={form.pizzaSize === "Büyük"}
              />
              <Label htmlFor="büyük">Büyük</Label>
            </FormGroup>
          </div>

          <div className="pizza-dough-card">
            <h3>
              Hamur Seç<span>*</span>
            </h3>
            <FormGroup>
              <select
                type="select"
                name="pizzaHamur"
                onChange={handleChange}
                value={form.pizzaHamur}
              >
                <option>Klasik Hamur</option>
                <option>İnce Hamur</option>
              </select>
            </FormGroup>
          </div>
        </div>

        <h3>Ek Malzemeler</h3>
        <div className="malzemeler-container">
          {malzemeler.map((malzeme, index) => {
            return (
              <Check
                key={index}
                changeFn={handleChange}
                value={malzeme.value}
                label={malzeme.label}
                name="ekMalzeme"
                className="malzeme-label"
              />
            );
          })}
        </div>
        <div className="input-container">
          <h3>Sipariş Notu</h3>
          <Input
            type="textarea"
            name="siparisNotu"
            value={form.siparisNotu}
            onChange={handleChange}
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            id="textArea"
          />
        </div>
        <hr />

        <div className="siparis-container">
          <div className="counter-button">
            <Counter />
          </div>

          <div className="siparis-toplam">

            <h3>Sipariş Toplamı</h3>
            <div className="price-container">
            <div className="fiyatlar grey">
              <p>Seçimler:</p>
              <p >5₺</p>
            </div>
            <div className="fiyatlar red">
              <p>Toplam:</p>
              <p>₺</p>
            </div>
            </div>

            <button className="submit-button"> Sipariş Ver</button>
          </div>
        </div>
      </Form>
    </>
  );
}
