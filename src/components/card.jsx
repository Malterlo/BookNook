
const Card = ({ id, title, author, description, price, image, handleCartAdd}) => {
  return (
    <div className="flex flex-col justify-center w-full p-6 bg-white rounded-lg shadow-md">
      <div>
        <h3 className="mb-2 text-lg font-bold text-center">{title}</h3>
        <p className="mb-2 italic text-gray-500">by {author}</p>
      </div>
      <div className="grow">
      <img
        src={image}
        alt={`Cover of ${title}`}
        className="object-cover w-full mb-4"
      />
      </div>
      <div className="grow">ackground-color: #29241e;x
      <p className="pt-5 text-gray-600">{description}</p>
      </div>

      <button 
        className="px-4 py-2 mt-4 font-bold text-white bg-yellow-400 rounded hover:bg-yellow-600"
        onClick={() => handleCartAdd({ id, title, price })}
      >
        <span className="flex flex-col text-xl font-bold text-red-900">
          ${price.toFixed(2)}
        </span>{" "}
        <div className="font-bold text-red-700">Add to Cart</div>
      </button>
    </div>
  );
};

export default Card;
