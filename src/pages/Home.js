import React from "react";
import classes from "./Home.module.css";
import homeImage1 from "../assets/pexels-fox-1595385.jpg";
import homeImage2 from "../assets/pexels-yan-krukov-8617769.jpg";
import homeImage3 from "../assets/pexels-yan-krukov-8618062.jpg";

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.images}>
        <div className={classes.image1}>
          <img src={homeImage1} alt="image1" />
        </div>
        <div className={classes.image2}>
          <img src={homeImage2} alt="image2" />
        </div>
        <div className={classes.image3}>
          <img src={homeImage3} alt="image3" />
        </div>
      </div>
      <div className={classes.introduction}>
        <h1 className={classes.header}>
          Committed To Excellence In Education.
        </h1>
        <p className={classes.desciption}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          cumque, deleniti nobis assumenda at ex perferendis dignissimos dicta
          debitis similique, ratione, quae iure optio velit dolorum autem.
          <br />
          Nulla, voluptate quis! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Commodi pariatur, aperiam unde nihil animi repellat
          modi repudiandae quidem iusto qui molestiae beatae tempore. Temporibus
          voluptate aliquid reiciendis magni! Repellendus, quis.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eaque
          maxime voluptates laudantium eius possimus autem in laboriosam id
          beatae, repellendus libero necessitatibus suscipit qui, quasi iure
          temporibus soluta doloremque.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
          officia animi est corrupti optio molestiae, harum aspernatur obcaecati
          blanditiis ad et totam quia nobis neque quas suscipit libero numquam
          minima.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          qui possimus, animi officia adipisci sint sequi nulla quae error
          exercitationem veniam excepturi cum architecto. Exercitationem
          blanditiis labore similique ex totam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Placeat, corrupti vel ducimus aliquid
          saepe laudantium maiores perspiciatis quibusdam? Explicabo porro,
          alias unde natus minus facere deleniti suscipit ea doloremque dolorem?
          <br />
        </p>
      </div>
    </div>
  );
};

export default Home;
