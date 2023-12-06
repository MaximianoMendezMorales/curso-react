// eslint-disable-next-line react/prop-types
import AddProduct from "../Cart/AddProduct.jsx";
import DetailLink from "./DetailLink.jsx";

// eslint-disable-next-line react/prop-types
const ProductItem = ({ product }) => {
    return (
        <li className="flex p-4 hover:bg-gray-100">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                {/* eslint-disable-next-line react/prop-types */}
                <img src={product.image.toString()} className="h-full w-full object-cover object-center" alt={product.title}/>
            </div>

            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <DetailLink product={product}/>
                        </h3>
                        {/* eslint-disable-next-line react/prop-types */}
                        <p className="ml-4">${product.price.toFixed(2)}</p>
                    </div>
                    {/* eslint-disable-next-line react/prop-types */}
                    <p className="mt-1 text-sm text-gray-500">{product.category.toString().toUpperCase()}</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty 1</p>

                    <div className="flex">
                        <AddProduct product={product}/>
                        {/*<button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>*/}
                    </div>
                </div>
            </div>
        </li>
    )
}

export default ProductItem;

