import { FormatOutlineWeightDuotone4 } from "../../icons/FormatOutlineWeightDuotone4";
import { FormatOutlineWeightFill4 } from "../../icons/FormatOutlineWeightFill4";
import { FormatOutlineWeightThin4 } from "../../icons/FormatOutlineWeightThin4";
import { FormatStrokeWeightBold4 } from "../../icons/FormatStrokeWeightBold4";
import { FormatStrokeWeightDuotone5 } from "../../icons/FormatStrokeWeightDuotone5";
import { FormatStrokeWeightLight4 } from "../../icons/FormatStrokeWeightLight4";
import { FormatStrokeWeightRegular4 } from "../../icons/FormatStrokeWeightRegular4";
import { FormatStrokeWeightThin4 } from "../../icons/FormatStrokeWeightThin4";
import "./style.css";

export const Plus = ({ format, weight }) => {
  return (
    <>
      {((format === "outline" && weight === "bold") ||
        (format === "outline" && weight === "light") ||
        (format === "outline" && weight === "regular") ||
        (format === "outline" && weight === "thin")) && (
        <FormatOutlineWeightThin4 className="instance-node" />
      )}

      {weight === "fill" && (
        <FormatOutlineWeightFill4 className="instance-node" />
      )}

      {format === "outline" && weight === "duotone" && (
        <FormatOutlineWeightDuotone4 className="instance-node" />
      )}

      {weight === "regular" && format === "stroke" && (
        <FormatStrokeWeightRegular4 className="instance-node" />
      )}

      {weight === "thin" && format === "stroke" && (
        <FormatStrokeWeightThin4 className="instance-node" />
      )}

      {weight === "light" && format === "stroke" && (
        <FormatStrokeWeightLight4 className="instance-node" />
      )}

      {weight === "bold" && format === "stroke" && (
        <FormatStrokeWeightBold4 className="instance-node" />
      )}

      {weight === "duotone" && format === "stroke" && (
        <FormatStrokeWeightDuotone5 className="instance-node" />
      )}
    </>
  );
};
