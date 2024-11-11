"use client "

import React from 'react';
import Property from './Property';
import Quote from './Quote';
import Image from 'next/image';

const Servico = () => {
    return (
       <>
        <div className="fancy-feature-fortySix position-relative">
            <div className="container">
            <div className="line-bg-wrapper position-relative pt-200 pb-180 lg-pt-120 md-pb-130">
                <div className="row align-items-center">
                <div className="col-lg-6" data-aos="fade-right">
                    <div className="title-style-eleven md-mb-20">
                    <h2 className="main-title tx-dark">
                        EQUIPAMENTOS
                    </h2>
                    </div>
                </div>
                <div className="col-lg-5 ms-auto " data-aos="fade-left">
                    <p className="text-lg m0">
                    Soluções personalizadas e serviços engenheirados para projetos completos
                    </p>
                </div>
                </div>
                {/* End .row */}

                <div className="row gx-xxl-5 pt-90 lg-pt-40 md-pt-20">
                <Property />
                </div>
                {/* End .row */}

                <Quote />
                {/* /.quote-wrapper */}

                <Image
                src="/images/assets/sticker_01.png"
                alt="sticker"
                className="lazy-img shapes shape-one"
                width={100}
                height={100}
                />
                <div className="shapes shape-two" />
                <Image
                src="/images/shape/shape_162.svg"
                alt="sticker 3"
                className="lazy-img shapes shape-three"
                width={100}
                height={100}
                />
                <Image
                src="/images/assets/sticker_02.png"
                alt="sticker 2"
                className="lazy-img shapes shape-four"
                width={100}
                height={100}
                />
                <div className="shapes shape-five" />
                <div className="shapes shape-six" />
            </div>
            {/* /.line-bg-wrapper */}
            </div>
            {/* /.container */}
        </div>
       </>
    )
}

export default Servico;

