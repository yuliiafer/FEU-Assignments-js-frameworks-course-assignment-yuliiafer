import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { STRAPI_URL, PRODUCTS_PATH } from "../utils/constants";
import axios from "axios";
import Loading from "./Loading";
import Item from "./Item";

function Details() {
  const [character, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useHistory();

  const { id } = useParams();

  if (!id) {
    history.push("/");
  }

  useEffect(() => {
    const URL = `${STRAPI_URL}${PRODUCTS_PATH}/`;
    const fetchCharacter = async () => {
      try {
        const data = await axios.get(
          `${URL}${id}`
        );
        console.log(data);
        if (data.status === 200) {
          setCharacters(data.data);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchCharacter();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>ERROR: An error occured</div>;
  }

  return (
    <>
      <h3>about: {character.fullName}</h3>
      <Item
        key={character.id}
        imageUrl={character.imageUrl}
        fullName={character.fullName}
        title={character.title}
        family={character.family}
      />
    </>
  );
}

export default Details;
