import { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";
import Check from "./Check";
import Counter from "./Counter";
import axios from "axios";
import MapComponent from "./MapComponent";

const initialErrors = {
  pizzaSize: true,
  pizzaHamur: true,
  ekMalzeme: true,
  fullname: true,
};

const initialForm = {
  pizzaSize: "orta",
  pizzaHamur: "klasik",
  ekMalzeme: [],
  siparisNotu: "",
  fullname: "",
  adet: 1,
};

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
  const history = useHistory();
  const [isValid, setIsValid] = useState(false);
  const [count, setCount] = useState(1);
  const [fiyat, setFiyat] = useState(0);
  const [errors, setErrors] = useState(initialErrors);

  // handleChange fonksiyonu
  const handleChange = (event) => {
    const { type, name, checked, value } = event.target;
    let newValue;
    if (name === "ekMalzeme") {
      const oldValues = form.ekMalzeme;
      if (checked) {
        newValue = [...oldValues, value]; // Seçildiyse değeri ekler
      } else {
        newValue = oldValues.filter((v) => v !== value); // Seçilmediyse değeri kaldırır
      }
      setErrors({
        ...errors,
        ekMalzeme: newValue.length < 4 || newValue.length > 10,
      });
    } else {
      newValue = value;
      if (name === "pizzaSize" || name === "pizzaHamur") {
        setErrors({
          ...errors,
          [name]: value === "",
        });
      }
    }

    setForm({ ...form, [name]: newValue });
    if (name == "fullname") {
      if (value.replaceAll(" ", "").length >= 3) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }
  };

  //handleSubmit fonksiyonu
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    axios
      .post("https://reqres.in/api/pizza", form)
      .then((res) => {
        console.log(res.data); // API yanıtını konsola yazdır
        const { id, createdAt } = res.data; // Yanıttan gerekli bilgileri al
        console.log("Sipariş Özeti:");
        console.log("ID:", id);
        console.log("Oluşturulma Tarihi:", createdAt);
        setForm(initialForm);
        setFiyat(0);
        setCount(1);
        history.push("/orderSuccess");
      })
      .catch((err) => console.log(err));
  };

  //toplam tutar hesaplamak için fonksiyon
  const updatePrice = () => {
    let newFiyat = form.adet * (85.5 + form.ekMalzeme.length * 5);
    setFiyat(newFiyat);
  };

  //fiyatı formda seçilenlere göre güncelleme
  useEffect(() => {
    updatePrice();
  }, [form]);

  // adet için bir handle fonksiyonu count sayısını forma kaydediyor
  const handleCountChange = (newCount) => {
    setForm({ ...form, adet: newCount });
  };

  //isValid
  useEffect(() => {
    setIsValid(
      !errors.ekMalzeme &&
        !errors.pizzaSize &&
        !errors.pizzaHamur &&
        !errors.fullname
    );
  }, [errors]);

  //form elemanları

  return (
    <>
      <header className="header">
        <img src="./Assets/mile1-assets/tek-yemek.png" alt="logo" />
      </header>
      <Form className="formContainer" onSubmit={handleSubmit}>
        <h3>Position Absolute Acı Pizza</h3>
        <div className="rating-container">
          <div className="price">85.50₺</div>
          <div className="rating">
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
            {errors.pizzaSize && (
              <p style={{ color: "red" }}>Lütfen bir boyut seçiniz.</p>
            )}
            <FormGroup>
              <Input
                id="küçük"
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
                id="orta"
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
                id="büyük"
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
            {errors.pizzaHamur && (
              <p style={{ color: "red" }}>Lütfen bir hamur türü seçiniz.</p>
            )}
            <FormGroup>
              <select
                type="select"
                name="pizzaHamur"
                onChange={handleChange}
                value={form.pizzaHamur}
              >
                <option value="klasik">Klasik Hamur</option>
                <option value="ince">İnce Hamur</option>
              </select>
            </FormGroup>
          </div>
        </div>

        <h3>Ek Malzemeler</h3>
        {errors.ekMalzeme && (
          <p style={{ color: "red" }}>
            En az 4 en fazla 10 malzeme seçebilirsiniz. 5₺
          </p>
        )}
        <div className="malzemeler-container">
          {malzemeler.map((malzeme, index) => {
            return (
              <Check
                key={index}
                changeFn={handleChange}
                isChecked={form.ekMalzeme.includes(malzeme.value)}
                value={malzeme.value}
                label={malzeme.label}
                name="ekMalzeme"
                className="malzeme-label"
              />
            );
          })}
        </div>
        <div className="input-container">
          <h3>Ad Soyad</h3>
          <Input
            type="textarea"
            name="fullname"
            value={form.fullname}
            onChange={handleChange}
            id="nameArea"
          />
          {errors.fullname && (
            <p style={{ color: "red" }}>
              Lütfen geçerli bir ad ve soyad giriniz.
            </p>
          )}
          <div className="App">
            <h3>Adresinizi İşaretleyiniz</h3>
            <MapComponent />
          </div>
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
            <Counter
              onCountChange={handleCountChange}
              count={count}
              setCount={setCount}
            />
          </div>

          <div className="siparis-toplam">
            <h3>Sipariş Toplamı</h3>
            <div className="price-container">
              <div className="fiyatlar grey">
                <p>Seçimler</p>
                <p>{form.ekMalzeme.length * 5}₺</p>
              </div>
              <div className="fiyatlar red">
                <p>Toplam</p>
                <p>{fiyat}₺</p>
              </div>
            </div>

            <button className="submit-button" disabled={!isValid}>
              Sipariş Ver
            </button>
          </div>
        </div>
      </Form>
    </>
  );
}
