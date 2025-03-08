const Card = (props) => {
    const { cardData } = props;
    return (
        <>
            <div className="w-full bg-[#ffffff] border-2 border-solid border-gray-300 rounded-xl p-5 gap-4 flex flex-col">
                    <div>
                    <a href="">
                        <img src={cardData.image} alt="product" className="w-full mb-4 rounded-xl"/>
                    </a>
                    </div>
                    <div className="">
                        <a href="">
                            <h5 className="text-xl font-bold text-black mr-2">{cardData.title}</h5>
                            <p className="text-base text-black mt-2">{cardData.description}</p>
                        </a>
                    </div>
            

              <div className="flex mt-6">
              <img src={cardData.photo} alt="tomi" className="w-10 h-10 rounded-lg mr-2" />
              <div className="flex-col ml-2">
                <p className="text-base text-[#222325] font-sans font-bold">{cardData.name}</p>
                <p className="text-xs text-gray-500 font-sans">{cardData.jabatan}</p>
              </div>
              </div>

              <div className="flex justify-between mt-6 flex-row mr-2">
              <div className="flex my-2">
    {   
        (() => {
            const arr = [];
            for (let i = 0; i < 5; i++) {
                if (i < cardData.count) {
                    arr.push(<svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>)
                } else {
                    arr.push(<svg className="w-4 h-4 text-gray-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>)

                }
            }
            return arr;
        })()
    }
    <p className="ml-1 text-sm text-gray-500 dark:text-gray-400 flex flex-col">{cardData.rate}</p>
</div>

<span className="text-xl font-bold text-[#3ecf4c] flex flex-col">{cardData.price}</span>
</div>
</div>
        </>
        
    )
}

export default Card;