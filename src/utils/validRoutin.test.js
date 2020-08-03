import validRoutin from "./validRoutin";

describe("Test Valid Rountin function", () => {
  const testRightNumbers = [
    "011103093",
    "067014822",
    "211274450",
    "211370545",
    "054001725",
    "011400071",
    "031201360",
    "026013673",
    "021302567",
    "053902197",
    "036001808",
    "011600033",
    "051000017",
    "026009593",
    "122101706",
    "121000358",
    "011400149",
    "011401928",
  ];

  const testBadNumbers = [
    "11111111",
    "2222222222",
    "2*2013812",
    "abdewer",
    "432143211",
    "897979971",
    "1298371",
    "000129 12",
    "291832910",
    "12389019282312",
  ];

  it("should test in right num list all the num is right number", () => {
    testRightNumbers.forEach((item, i) => {
      expect(validRoutin(item)).toBe(true);
    });
  });

  it("should test in bad num list all the num is not routin number", () => {
    testBadNumbers.forEach((item, i) => {
      expect(validRoutin(item)).toBe(false);
    });
  });
});
