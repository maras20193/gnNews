import { truncateText } from "./truncateText";

describe("Truncate", () => {
  test(`cut text to given number of chars and add "..."`, () => {
    const result = truncateText("Test Test test. This is Test", 7);
    expect(result).toBe("Test Te...");
    expect(result.length).toBe(10);
  });
  test(`cutText without charsNumber`, () => {
    const result = truncateText("Test Test test. This is Test");
    expect(result).toBe("Test Test ...");
    expect(result.length).toBe(13);
  });
  test(`cut Text when chars number is bigger then text length `, () => {
    const result = truncateText("Test Test test. This is Test", 50);
    expect(result).toBe("Test Test test. This is Test...");
    expect(result.length).toBe(31);
  });
  test(`cut Text when chars number === 0`, () => {
    const result = truncateText("Test Test test. This is Test", 0);
    expect(result).toBe("...");
    expect(result.length).toBe(3);
  });
});
