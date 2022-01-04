import React, { useEffect, useState } from "react";
import "../App.css";
import NewsCard from "../components/NewsCard";
import "./Masonry.css";
import Masonry from "react-masonry-css";
import transitionMain from "../UI/Transitions";
import { motion } from "framer-motion";

const News = () => {
  const [newsItems, setNewsItems] = useState([]);

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  const fetchNews = async () => {
    try {
      const response = await fetch(
        "https://newsdata.io/api/1/news?apikey=pub_3290d0258600e0556a0ee69e185e10679a53&q=dogecoin"
      );
      const data = await response.json();

      console.log(data);

      const news = await data.results.map((item) => ({
        title: item.title,
        link: item.link,
        description: item.description,
        date: item.pubDate,
        image: item.image_url,
      }));

      setNewsItems(news);

      return news;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <motion.div
      variants={transitionMain}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid-column"
        variants={transitionMain}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {newsItems.map((item, index) => (
          <NewsCard
            title={item.title}
            link={item.link}
            desciption={item.desciption}
            date={item.date}
            image={item.image}
            key={index}
          />
        ))}
      </Masonry>
    </motion.div>
  );
};

export default News;
