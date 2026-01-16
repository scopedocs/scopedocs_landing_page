import { FormatOutlineWeightBold1 } from "../../icons/FormatOutlineWeightBold1";
import { FormatOutlineWeightDuotone1 } from "../../icons/FormatOutlineWeightDuotone1";
import { FormatOutlineWeightFill1 } from "../../icons/FormatOutlineWeightFill1";
import { FormatOutlineWeightLight1 } from "../../icons/FormatOutlineWeightLight1";
import { FormatOutlineWeightRegular1 } from "../../icons/FormatOutlineWeightRegular1";
import { FormatOutlineWeightThin1 } from "../../icons/FormatOutlineWeightThin1";
import { FormatStrokeWeightBold3 } from "../../icons/FormatStrokeWeightBold3";
import { FormatStrokeWeightDuotone3 } from "../../icons/FormatStrokeWeightDuotone3";
import { FormatStrokeWeightLight3 } from "../../icons/FormatStrokeWeightLight3";
import { FormatStrokeWeightRegular3 } from "../../icons/FormatStrokeWeightRegular3";
import { FormatStrokeWeightThin3 } from "../../icons/FormatStrokeWeightThin3";
import "./style.css";

export const Link = ({ format, weight }) => {
  return (
    <>
      {weight === "regular" && format === "outline" && (
        <FormatOutlineWeightRegular1 className="instance-node-4" />
      )}

      {format === "outline" && weight === "thin" && (
        <FormatOutlineWeightThin1 className="instance-node-4" />
      )}

      {weight === "light" && format === "outline" && (
        <FormatOutlineWeightLight1 className="instance-node-4" />
      )}

      {format === "outline" && weight === "bold" && (
        <FormatOutlineWeightBold1 className="instance-node-4" />
      )}

      {weight === "fill" && (
        <FormatOutlineWeightFill1 className="instance-node-4" />
      )}

      {format === "outline" && weight === "duotone" && (
        <FormatOutlineWeightDuotone1 className="instance-node-4" />
      )}

      {weight === "regular" && format === "stroke" && (
        <FormatStrokeWeightRegular3 className="instance-node-4" />
      )}

      {weight === "thin" && format === "stroke" && (
        <FormatStrokeWeightThin3 className="instance-node-4" />
      )}

      {weight === "light" && format === "stroke" && (
        <FormatStrokeWeightLight3 className="instance-node-4" />
      )}

      {weight === "bold" && format === "stroke" && (
        <FormatStrokeWeightBold3 className="instance-node-4" />
      )}

      {weight === "duotone" && format === "stroke" && (
        <FormatStrokeWeightDuotone3 className="instance-node-4" />
      )}
    </>
  );
};
