
const Card = ({ id, title, author, description, price, image, handleCartAdd}) => {
  return (
    <div className="flex flex-col w-full justify-center bg-white shadow-md rounded-lg p-6">
      <div>
        <h3 className="text-lg text-center font-bold mb-2">{title}</h3>
        <p className="text-gray-500 italic mb-2">by {author}</p>
      </div>
      <div className="grow">
      <img
        src={image}
        alt={`Cover of ${title}`}
        className="w-full object-cover mb-4"
      />
      </div>
      <div className="grow">
      <p className="text-gray-600 pt-5">{description}</p>
      </div>

      <button 
        className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold mt-4 py-2 px-4 rounded"
        onClick={() => handleCartAdd({ id, title, price })}
      >
        <span className="flex flex-col text-xl font-bold text-red-900">
          ${price.toFixed(2)}
        </span>{" "}
        <div className="text-red-700 font-bold">Add to Cart</div>
      </button>
    </div>
  );
};

export default Card;
