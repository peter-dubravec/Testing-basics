const ceasarCypher = require("../ceasarCypher");

test("Simple Ceasar Cypher", () => {
  expect(ceasarCypher("aaaaa.", 1)).toBe("bbbbb.");
});

test("Ceasar Cypher Sentence", () => {
  expect(ceasarCypher("Defend the east wall of the castle.", 1)).toBe(
    "Efgfoe uif fbtu xbmm pg uif dbtumf."
  );
});

test("Ceasar Cipher big shift", () => {
  expect(ceasarCypher("Hello world!", 12)).toBe("Tqxxa iadxp!");
});

test("Ceasar Cipher long text", () => {
  expect(
    ceasarCypher(
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      18
    )
  ).toBe(
    "Dgjwe ahkme ak kaehdq vmeeq lwpl gx lzw hjaflafy sfv lqhwkwllafy afvmkljq. Dgjwe ahkme zsk twwf lzw afvmkljq'k klsfvsjv vmeeq lwpl wnwj kafuw lzw 1500k, ozwf sf mfcfgof hjaflwj lggc s ysddwq gx lqhw sfv kujsetdwv al lg escw s lqhw khwuaewf tggc. Al zsk kmjnanwv fgl gfdq xanw uwflmjawk, tml sdkg lzw dwsh aflg wdwuljgfau lqhwkwllafy, jwesafafy wkkwflasddq mfuzsfywv."
  );
});

test("Ceasar Cipher with just symbols", () => {
  expect(ceasarCypher(";'[]459 832 0,./")).toBe(";'[]459 832 0,./");
});
