import FormattedPrice from "./FormattedPrice";
import { mergedefaultCss } from "@/common/lib/mergeCustomTailwindCss";

interface Props {
  regularPrice?: number;
  discountedPrice?: number;
  className?: string;
}

const PriceTag = ({ regularPrice, discountedPrice, className }: Props) => {
  return (
    <div className={mergedefaultCss("flex items-center gap-2", className)}>
      <p className="line-through text-gray-500 font-medium">
        <FormattedPrice amount={regularPrice} />
      </p>
      <p className="font-bold text-skyText">
        <FormattedPrice amount={discountedPrice} />
      </p>
    </div>
  );
};

export default PriceTag;