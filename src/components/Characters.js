import { useEffect, useState } from "react";
import { STRAPI_URL, PRODUCTS_PATH } from "../utils/constants";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import ColorButton from "./ColorButton";
import { writeStorage } from "@rehooks/local-storage";
import axios from "axios";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await axios.get(`${STRAPI_URL}${PRODUCTS_PATH}`);
        console.log(response);

        if (response.status === 200) {
          setCharacters(response.data);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };
    getCharacters();
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
      {characters.map((character) => {
        let id = character.id;
        let fullName = character.fullName;
        let imageUrl = character.imageUrl;
        return (
          <div className="wrapper" key={id}>
            <div className="cards">
              <div className="card">
                <Link key={id} to={`/detail/${id}`}>
                  <img src={imageUrl} alt={character.image} />
                  <h2>{fullName}</h2>
                </Link>{" "}
                <div className="fav-icon">
                  <button
                    className="heart"
                    onClick={(_) => {
                      writeStorage(
                        id,
                        imageUrl,
                        localStorage.getItem(id, imageUrl)
                          ? +localStorage.getItem(id) + 1
                          : character.imageUrl
                      );
                    }}
                  >
                    {" "}
                    <ColorButton />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Characters;
