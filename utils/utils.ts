import { Attachment, Influencer } from "@/store";
export type tablekeys = keyof Attachment | keyof Influencer;
export type tablesortDirections = "asc" | "desc";

export function parseUpdatedAt(updatedAt: string) {
  const date = new Date(updatedAt);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().slice(-2);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

export const handleSort = (
  column: string,
  sortColumn: string,
  setSortColumn: any,
  setSortOrder: any
) => {
  if (sortColumn === column) {
    // If the same column is clicked, toggle the sort order
    setSortOrder((prevSortOrder: tablesortDirections) =>
      prevSortOrder === "asc" ? "desc" : "asc"
    );
  } else {
    // If a different column is clicked, set the column and initial sort order
    setSortColumn(column);
    setSortOrder("asc");
  }
};

export const parseCurrencyString = (a: string, b: string) => {

  return (
    (Number.isNaN(
      parseInt(
        a
          .replaceAll(".", "")
          .replaceAll(",", "")
          .replaceAll(" ", "")
          .replaceAll("R$", "")
          .replaceAll("-", "")
      )
    )
      ? 0
      : parseInt(
          a
            .replaceAll(".", "")
            .replaceAll(",", "")
            .replaceAll(" ", "")
            .replaceAll("R$", "")
            .replaceAll("-", "")
        )) -
    (Number.isNaN(
      parseInt(
        b
          .replaceAll(".", "")
          .replaceAll(",", "")
          .replaceAll(" ", "")
          .replaceAll("R$", "")
          .replaceAll("-", "")
      )
    )
      ? 0
      : parseInt(
          b
            .replaceAll(".", "")
            .replaceAll(",", "")
            .replaceAll(" ", "")
            .replaceAll("R$", "")
            .replaceAll("-", "")
        ))
  );
};

export function hexToRgba(hex: string, alpha: number = 1): string {
  const hexPattern = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
  const shortHexPattern = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

  const result = hexPattern.exec(hex) || shortHexPattern.exec(hex);

  if (!result) {
    return hexToRgba('#E624CF');
  }

  const [, r, g, b] = result.slice(1).map((x) => parseInt(x, 16));
  const alphaValue = alpha >= 0 && alpha <= 1 ? alpha : 1;

  const returnValue = `rgba(${r}, ${g}, ${result[3]}, ${alphaValue})`;

  return returnValue;
}