import { useParams } from "react-router-dom";

const SingleArticle = () => {
  const { article_id } = useParams();


  return (
    <section>
      <h1>{article_id}</h1>
    </section>
  );
};

export default SingleArticle;
