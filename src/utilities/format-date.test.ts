
import { getFormattedDate } from "./format-date";

describe("getFormattedDate", () => {
  it("should return date in format DD-MM-YYYY", () => {
    const date = new Date("2020-05-12");
    const formattedDate = getFormattedDate(date);

    expect(formattedDate).toBe("12-05-2020");
  })
})