import { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";
import Check from "../components/Check";
import Counter from "../components/Counter";
import axios from "axios";
import MapComponent from "../components/MapComponent";
import Description from "../components/Description";

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
  { value: "jambon", label: "Jambon" },
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
  const [address, setAddress] = useState("");

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
        history.push("/orderSuccess", { ...form, totalPrice: fiyat, address });
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

  const handleAddressChange = (address) => {
    setForm({ ...form, address });
  };

  //form elemanları

  return (
    <>
      <Description />
      <Form className="formContainer" onSubmit={handleSubmit}>
        <div className="pizza-size-container">
          <div className="pizza-size-card">
            <h3>
              Boyut Seç <span>*</span>
            </h3>
            {errors.pizzaSize && (
              <p style={{ color: "red" }}>Lütfen bir boyut seçiniz.</p>
            )}
            <div className="radio-group">
              <FormGroup>
                <Input
                  id="küçük"
                  type="radio"
                  name="pizzaSize"
                  value="Küçük"
                  onChange={handleChange}
                  checked={form.pizzaSize === "Küçük"}
                  className="custom-radio-input"
                />
                <Label htmlFor="küçük" className="custom-radio-label">
                  S
                </Label>
              </FormGroup>

              <FormGroup>
                <Input
                  id="orta"
                  type="radio"
                  name="pizzaSize"
                  value="Orta"
                  onChange={handleChange}
                  checked={form.pizzaSize === "Orta"}
                  className="custom-radio-input"
                />
                <Label htmlFor="orta" className="custom-radio-label">
                  M
                </Label>
              </FormGroup>

              <FormGroup>
                <Input
                  id="büyük"
                  type="radio"
                  name="pizzaSize"
                  value="Büyük"
                  onChange={handleChange}
                  checked={form.pizzaSize === "Büyük"}
                  className="custom-radio-input"
                />
                <Label htmlFor="büyük" className="custom-radio-label">
                  L
                </Label>
              </FormGroup>
            </div>
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
            className="fullnameTest"
          />
          {errors.fullname && (
            <p style={{ color: "red" }}>
              Lütfen geçerli bir ad ve soyad giriniz.
            </p>
          )}
          <div className="App">
            <h3>Adresinizi İşaretleyiniz</h3>

            {
              <MapComponent
                address={address}
                setAddress={setAddress}
                onAddressChange={handleAddressChange}
              />
            }
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
