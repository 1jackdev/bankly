const timeWord = require("./timeWord");

describe("#timeword", () => {
  test("it is a function", () => {
    expect(typeof timeWord).toBe("function");
  });

  test("it handles the 'oh' in minutes", () => {
    input = "16:04";
    let output = timeWord(input);
    expect(output).toContain("oh");
  });

  test("it converts 24hr to am-pm", () => {
    input = "13:10";
    let output = timeWord(input);
    expect(output).toContain("pm");
  });

  test('it returns o"clock', () => {
    input = "07:00";
    let output = timeWord(input);
    expect(output).toContain("o'clock");
  });

  test('it returns midnight', () => {
    input = "00:00";
    let output = timeWord(input);
    expect(output).toContain("midnight");
  });
});
