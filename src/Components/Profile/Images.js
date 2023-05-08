import React from "react";



const CoverImage = ({imageUrl}) => {
  const defaultCoverImage = "https://images.ctfassets.net/7thvzrs93dvf/wpImage18536/5bad272ce24d9ce3b6b76a78ada6fa7b/abstract-pyrimid-upsplash.png?w=900&h=225&q=90&fm=png";
    return (
        <section className="relative block" style={{ height: "500px" }}>
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover justify-center"
          style={{
            backgroundImage:imageUrl? `url(http://localhost:8000/images/${imageUrl})` : `url(${defaultCoverImage})`

          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
    );
};

export default CoverImage;
