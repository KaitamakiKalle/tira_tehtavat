const coderA = new Set(['JS', 'PHP', 'C#', 'Python']);
const coderB = new Set(['JS', 'Java', 'C++', 'Python']);
const coderC = new Set(['JS', 'Java', 'Perl', 'Ruby']);

const coders = [coderA, coderB, coderC];

const union = function (coders) {
  const codersUnion = new Set();

  coders.forEach((coder) => {
    coder.forEach((language) => {
      codersUnion.add(language);
    });
  });
  return codersUnion;
};

const haveCodeSkill = function (coders, language) {
  const codersUnion = union(coders);

  return codersUnion.has(language);
};

module.exports = { union, haveCodeSkill };
