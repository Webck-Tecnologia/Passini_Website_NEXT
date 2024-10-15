import { useState, useEffect } from "react";
import "./ImgGallery.module.css";

const ImgGallery = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const closeModal = () => setOpen(false);

  return (
    <>
      <div className="img-gallery md-mt-60">
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
          aria-label="Abrir vídeo"
          title="Assistir vídeo"
        >
          <i className="fas fa-play" aria-hidden="true" />
        </button>
        <img
          src="/images/icon/grua2.webp"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
        <div className="shapes shape-three" />
      </div>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal} aria-label="Fechar vídeo">
              &times;
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/-ES1io1K6KM?autoplay=1"
              title="Vídeo da Passini Equipamentos"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default ImgGallery;

<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Vídeo da Passini Equipamentos",
    "description": "Conheça mais sobre a Passini Equipamentos e nossos serviços",
    "thumbnailUrl": "/images/video/1.png",
    "uploadDate": "2023-01-01T08:00:00+08:00",
    "contentUrl": "https://www.youtube.com/watch?v=-ES1io1K6KM"
  })}
</script>
