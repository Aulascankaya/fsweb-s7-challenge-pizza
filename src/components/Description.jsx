



export default function Description() {
  return (
    <div className="info-div">
      <img src="/form-banner.png" />
      <div>
        <div
          style={{
            width: "607px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <p
            style={{
              fontFamily: "Barlow",
              fontSize: "16px",
              fontWeight: "500",
              color: "#5F5F5F",
            }}
          >
            Ana Sayfa -{" "}
            <span style={{ color: "#CE2829" }}>Sipariş Oluştur</span>
          </p>
          <p className="info-name">Position Absolute Acı Pizza</p>
          <div className="info-price">
            85₺
            <div
              style={{
                fontWeight: "400",
                fontSize: "16px",
                color: "#5F5F5F",
                display: "flex",
                justifyContent: "space-between",
                width: "30%",
                paddingRight: "2rem",
              }}
            >
              4.9 <span>(200)</span>
            </div>
          </div>
          <p className="info-descript">
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>
      </div>
    </div>
  );
}
