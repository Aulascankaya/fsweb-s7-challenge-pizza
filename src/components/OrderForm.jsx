import { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";



const initialForm = {
 
};

export default function OrderForm() {


  const [form, setForm] = useState(initialForm);

  // handleChange fonksiyonu
  const handleChange = (event) => {

  };
  //handleSubmit fonksiyonu
  const handleSubmit = (e) => {

  };



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
        <div>
          <div>
            <div>
              <h3>Boyut Seç</h3>
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
          </div>
          <div>
            <h3>Hamur Kalinligi</h3>
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
      </Form>
    </>
  );
}
