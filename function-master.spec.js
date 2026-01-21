describe("Be the Function Master", () => {

  // Function #1
  it("objectValues(): Should take an object and return its values in a string", () => {
    var objectOne = {
      a: "one",
      b: "two",
    };
    var objectTwo = {
      c: "three",
      d: "four",
    };

    assert.deepEqual(objectValues(objectOne), ["one", "two"]);
    assert.deepEqual(objectValues(objectTwo), ["three", "four"]);
  });

  // Function #2
  it('keysToString(): Should take an object and return its keys in a string separated by a space', () => {
    var objectOne = { a: 'one', b: 'two '};
    var objectTwo = { c: 'three', d: 'four', e: 'five' };

    assert.equal(keysToString(objectOne), "one two");
    assert.equal(keysToString(objectTwo), "three four five");
  });

  // Function #3
  it('valuesToString() : Should take an object and return all its string values in a string each separated with a space', () => {
    var objectOne = {
      a: 'one',
      b: 'two',
      c: {},
      d: [],
    }

    var objectTwo = {
      firstName: 'Alex',
      lastName: 'Francis',
      lastName: 'Aaron'
    }

    assert.equal(valuesToString(objectOne), 'one two');
    assert.equal(valuesToString(objectTwo), 'Alex Francis Aaron');
  });

  // Function #4
  it("arrayOrObject() : Should take one argument and return 'array' if its an array and 'object' if its an object", () => {
    assert.equal(arrayOrObject({ a: "one" }), "object");
    assert.equal(arrayOrObject([1, 2, {}]), "array");
  });

  // Function #5
  it("capitalizeWord() : Should take a string of one word, and return the word with its first letter capitalized", () => {
    assert.equal(capitalizeWord("hello"), "Hello");
    assert.equal(capitalizeWord("word"), "Word");
  });

  // Function #6
  it("capitalizeAllWords() : Should take a string of words and return a string with all the words capitalized ", () => {
    assert.equal(capitalizeAllWords("hello world"), 'Hello World');
    assert.equal(capitalizeAllWords("this is a string"), 'This Is A String');
  });

  // Function #7
  it("welcomeMessage() : Should take an object with a name property and return 'Welcome <Name>!'", () => {
    assert.equal(welcomeMessage({ name: "bert" }), "Welcome Bert!");
    assert.equal(welcomeMessage({ name: "Charlie" }), "Welcome Charlie!");
  });

  // Function #8
  it("profileInfo() : Should take an object with a name an a species and return '<Name> is a <Species>'", () => {
    assert.equal(profileInfo({ name: "jake", species: "dog" }), "Jake is a Dog");
    assert.equal(profileInfo({ name: "reggie", species: "dog" }), "Reggie is a Dog");
  });

  // Function #9
  it("maybeNoises() : Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'", () => {
    assert.equal(maybeNoises({ noises: ["bark", "woof", "squeak", "growl"], }), "bark woof squeak growl");
    assert.equal(maybeNoises({ noises: [] }), "there are no noises");
    assert.equal(maybeNoises({}), "there are no noises");
  });

  // Function #10
  it("hasWord() : Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.", () => {
    var data = "This is a super awesome string of words";
    assert.strictEqual(hasWord(data, "awesome"), true);
    assert.strictEqual(hasWord(data, "words"), true);
    assert.strictEqual(hasWord(data, "turtle"), false);
  });

  // Function #11
  it("addFriend() : Should take a name and an object and add the name to the object's friends array then return the object", () => {
    assert.deepEqual(addFriend("lester", { friends: [] }), { friends: ["lester"] });
    assert.deepEqual(addFriend("jimmy", { friends: ["bobby", "jones"] }), { friends: ["bobby", "jones", "jimmy"] });
  });

  // Function #12
  it("isFriend() : Should take a name and an object and return true if <name> is a friend of <object> and false otherwise", () => {
    assert.equal(isFriend("jimmy", { friends: ["bobby", "ralf"] }), false);
    assert.equal(isFriend("ralf", { friends: ["bobby", "ralf"] }), true);
    assert.equal(isFriend("chuck", {}), false);
  });

  // Function #13
  it("nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with", () => {
    var data = [
      { name: "Jimmy", friends: ["Sara", "Liza"] },
      { name: "Bob", friends: [] },
      { name: "Liza", friends: ["Jimmy"] },
      { name: "Sara", friends: ["Jimmy"] },
    ];
    assert.deepEqual(nonFriends("Jimmy", data), ["Bob"]);
    assert.deepEqual(nonFriends("Bob", data), ["Jimmy", "Liza", "Sara"]);
    assert.deepEqual(nonFriends("Sara", data), ["Bob", "Liza"]);
  });

  // Function #14
  it("updateObject() : Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.", () => {
    var objectOne = { a: "one", b: "two", hokey: false };
    assert.deepEqual(updateObject(objectOne, "b", "three"), {
      a: "one",
      b: "three",
      hokey: false,
    });

    var objectTwo = { a: "one", b: "two", hokey: false };
    assert.deepEqual(updateObject(objectTwo, "ponies", "yes"), {
      a: "one",
      b: "two",
      hokey: false,
      ponies: "yes",
    });
  });

  // Function #15
  it("removeProperties() : Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>", () => {
    var objectOne = { a: "one", b: "two", hokey: false };
    removeProperties(objectOne, ["a", "hokey"]);
    assert.deepEqual(objectOne, { b: "two" });

    var objectTwo = { c: "three", d: "four "};
    removeProperties(data, ["d"]);
    assert.deepEqual(data, { c: "three" });

  });

  // Function #16
  it("dedup() : Should take an array and return an array with all the duplicates removed", () => {
    var arrayOne = [
      1,
      2,
      2,
      2,
      3,
      4,
      5,
      5,
      5,
      5,
      "a",
      "b",
      "b",
      "b",
      "c",
    ];
    var arrayTwo = [
      "hello",
      "hello",
      "hello",
      "hello",
      "hello",
      "world",
      "hello",
      "world",
      "world",
      "world",
    ];
    assert.deepEqual(dedup(arrayOne), [1, 2, 3, 4, 5, "a", "b", "c"]);
    assert.deepEqual(dedup(arrayTwo), ["hello", "world"]);
  });

});