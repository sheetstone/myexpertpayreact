import validCaseNumber from "./validCaseNumber";

/*
Case number logic: 
Case number start with 2-5 Char, 
Follow with a dash,
and follow with 6-9 number,
*/

describe("Test Valid Case Number function", () => {
  const testRightNumbers = [
    "DF-12010304",
    "067014822",
    "SFEE-122922",
    "123890192",
  ];

  const testBadNumbers = [
    "aaaaa",
    "zzz-2201-as812",
    "abde-wer",
    "0sdfwe-0012912",
    "291-wer910",
  ];

  it("should test in right num list all the num is right number", () => {
    testRightNumbers.forEach((item, i) => {
      expect(validCaseNumber(item)).toBe(true);
    });
  });

  it("should test in bad num list all the num is not routin number", () => {
    testBadNumbers.forEach((item, i) => {
      expect(validCaseNumber(item)).toBe(false);
    });
  });
});
