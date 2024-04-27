import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import axios from "axios";
import "./styles.css";

const ImageSlider = ({ url, page = 1, limit = 5 }) => {
  const [images, setImages] = useState([]);
  const [currSlide, setCurrSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (getUrl) => {
    try {
      setLoading(true);

      const response = await axios.get(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.data;

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  };

  const handlePrevious = () => {
    setCurrSlide(currSlide === 0 ? images.length - 1 : currSlide - 1);
  };

  const handleNext = () => {
    setCurrSlide(currSlide === images.length - 1 ? 0 : currSlide + 1);
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading data! please wait...</div>;
  }

  if (errorMsg !== null) {
    return <div>Error Occured! {errorMsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
