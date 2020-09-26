import React from "react";
import styles from "./Home.module.css";
import img1 from "./../img/20131117_091720.jpg";
import img2 from "./../img/4756.jpg";
import img3 from "./../img/City-parks.jpg";
import img4 from "./../img/Felixstowe-Reserve-Proludic-10-of-60_2.jpg";
import img5 from "./../img/file-20200505-83757-10as6vx.webp";
import img6 from "./../img/genMid.170048532_24_0.jpg";
import img7 from "./../img/GPJ_México_ASP_SanitizaciónChilpancingo-7__web2048.jpg";
import img8 from "./../img/image6d95f64f-ef1c-4d59-81e6-82584f590f87.jpg";
import img10 from "./../img/virusoutbreaktexas8086347989.jpg";
import img11 from "./../img/waterfront-park-2.webp";
import img12 from "./../img/YhzniADdjJVBRUx-800x450-noPad.jpg";

const Home = (props) => {
  return (
    <div className={styles.home}>
      <div className={styles.gallery}>
        <figure className={styles.item1}>
          <img src={img1} alt="Galleryimage1" className={styles.galleryImg} />
        </figure>
        <figure className={styles.item2}>
          <img src={img2} alt="Galleryimage2" className={styles.galleryImg} />
        </figure>
        <figure className={styles.item3}>
          <img src={img3} alt="Galleryimage3" className={styles.galleryImg} />
        </figure>
        <figure className={styles.item4}>
          <img src={img4} alt="Galleryimage4" className={styles.galleryImg} />
        </figure>
        <figure className={styles.item5}>
          <img src={img5} alt="Galleryimage5" className={styles.galleryImg} />
        </figure>
        <figure className={styles.item6}>
          <img src={img6} alt="Galleryimage6" className={styles.galleryImg} />
        </figure>{" "}
        <figure className={styles.item7}>
          <img src={img7} alt="Galleryimage7" className={styles.galleryImg} />
        </figure>
        <figure className={styles.item8}>
          <img src={img8} alt="Galleryimage8" className={styles.galleryImg} />
        </figure>
        <figure className={styles.item10}>
          <img src={img10} alt="Galleryimage10" className={styles.galleryImg} />
        </figure>
        <figure className={styles.item11}>
          <img src={img11} alt="Galleryimage11" className={styles.galleryImg} />
        </figure>
        <figure className={styles.item12}>
          <img src={img12} alt="Galleryimage12" className={styles.galleryImg} />
        </figure>
      </div>
      <div className={styles.tips}>
        <h1>Stay physically active during self-quarantine</h1>
        <ul>
          <li>Take short active breaks during the day.</li>
          <li>Relax.</li>
          <li>Stand up.</li>
          <li>Walk.</li>
        </ul>
        <h4>
          This is intended for people in self-quarantine without any
          symptoms or diagnosis of acute respiratory illness.
        </h4>
      </div>
      <div className={styles.name}>
        <img
          src="https://www.freelogodesign.org/file/app/client/thumb/d8d5837a-ec49-42f0-b094-e34be16a3511_200x200.png?1601124715306"
          alt="logo"
          className={styles.logo}
        />
        <div className={styles.logoName}>
          <span style={{ color: "white" }}>Par</span>
          <span style={{ color: "black" }}>kify</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
