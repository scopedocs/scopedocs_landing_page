import { FormatOutlineWeightDuotone3 } from "../../icons/FormatOutlineWeightDuotone3";
import { FormatOutlineWeightFill3 } from "../../icons/FormatOutlineWeightFill3";
import { FormatOutlineWeightThin3 } from "../../icons/FormatOutlineWeightThin3";
import { FormatStrokeWeightBold5 } from "../../icons/FormatStrokeWeightBold5";
import { FormatStrokeWeightDuotone4 } from "../../icons/FormatStrokeWeightDuotone4";
import { FormatStrokeWeightLight5 } from "../../icons/FormatStrokeWeightLight5";
import { FormatStrokeWeightRegular5 } from "../../icons/FormatStrokeWeightRegular5";
import { FormatStrokeWeightThin5 } from "../../icons/FormatStrokeWeightThin5";
import "./style.css";

export const DotsThreeOutline = ({ format, weight }) => {
  return (
    <>
      {((format === "outline" && weight === "bold") ||
        (format === "outline" && weight === "light") ||
        (format === "outline" && weight === "regular") ||
        (format === "outline" && weight === "thin")) && (
        <FormatOutlineWeightThin3 className="instance-node-2" />
      )}

      {weight === "fill" && (
        <FormatOutlineWeightFill3 className="instance-node-2" />
      )}

      {format === "outline" && weight === "duotone" && (
        <FormatOutlineWeightDuotone3 className="instance-node-2" />
      )}

      {weight === "regular" && format === "stroke" && (
        <FormatStrokeWeightRegular5 className="instance-node-2" />
      )}

      {weight === "thin" && format === "stroke" && (
        <FormatStrokeWeightThin5 className="instance-node-2" />
      )}

      {weight === "light" && format === "stroke" && (
        <FormatStrokeWeightLight5 className="instance-node-2" />
      )}

      {weight === "bold" && format === "stroke" && (
        <FormatStrokeWeightBold5 className="instance-node-2" />
      )}

      {weight === "duotone" && format === "stroke" && (
        <FormatStrokeWeightDuotone4 className="instance-node-2" />
      )}
    </>
  );
};
