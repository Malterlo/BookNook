import { Link } from "react-router-dom";

const Card = ({
  id,
  title,
  author,
  genre,
  price,
  image,
  handleCartAdd,
}) => {
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-[18px] border border-[#bda98e] bg-white p-4 shadow-[0_12px_28px_rgba(82,60,26,0.12)] dark:border-[#69543c]">
      <div>
        <h3 className="mb-2 text-center text-lg font-bold text-[#2e241b] dark:text-[#f7f2e8]">
          {title}
        </h3>
        <p className="mb-2 text-sm italic text-[#5a4d43] dark:text-[#c8bcae]">
          by {author}
        </p>
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.08em] text-[#8c481c] dark:text-[#f5c86d]">
          {genre}
        </p>
      </div>
      <div className="grow">
        <Link
          className="mt-2 text-center font-bold text-[#8c481c] hover:underline"
          to={`/shop/${id}`}
        >
          <img
            src={image}
            alt={`Cover of ${title}`}
            className="mb-2 h-64 w-full rounded-lg object-cover"
          />
        </Link>
      </div>
      <button
        className="mt-4 rounded bg-[#f5c86d] px-4 py-2 font-bold text-[#2e241b] hover:bg-[#e6b86f]"
        onClick={() => handleCartAdd({ id, title, author, genre, price, image })}
      >
        <span className="flex flex-col text-xl font-bold">
          ${price.toFixed(2)}
        </span>{" "}
        <div className="font-bold">Add to cart</div>
      </button>
    </div>
  );
};

export default Card;
