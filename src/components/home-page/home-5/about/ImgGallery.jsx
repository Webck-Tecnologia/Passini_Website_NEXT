import { useState } from "react";
import ModalVideo from "react-modal-video";

const ImgGallery = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="-ES1io1K6KM"
        onClose={() => setOpen(false)}
      />

      <div className="img-gallery md-mt-60 ">
        <div className="row align-items-center" data-aos="fade-right">
          <div className="col-6">
            <img
              src="/images/video/1.png"
              alt="media"
              className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
            />
            <img
                src="/images/video/2.png"
              alt="media"
              className="lazy-img ms-auto mt-40 mb-40 lg-mt-20 lg-mb-20"
            />
          </div>
          <div className="col-6">
            <img
              src="/images/video/3.png"
              alt="media"
              className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
            />
          </div>
        </div>
        {/* End .row */}

        <button
          className="fancybox video-icon rounded-circle tran3s d-flex align-items-center justify-content-center"
          onClick={() => setOpen(true)}
        >
          <i className="fas fa-play" />
        </button>

        <img
          src="/images/icon/grua2.webp"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
        <div className="shapes shape-three" />
      </div>
    </>
  );
};

export default ImgGallery;
