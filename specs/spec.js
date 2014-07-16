describe("scrabbleLetter", function() {
  it("returns a score for a letter", function() {
    scrabbleLetter('a').should.equal(1);
  });
  it("returns the correct score for a letter", function() {
    scrabbleLetter('j').should.equal(8);
  });
});

describe("scrabble", function() {
  it("returns the correct score for a word", function() {
    scrabble('justin').should.equal(13);
  });
});

