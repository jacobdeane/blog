const visit = require(`unist-util-visit`);
const remove = require(`unist-util-remove`);

module.exports = ({ markdownAST }) => {
  visit(markdownAST, `paragraph`, (node, index, parent) => {
    const hasOnlyCodeNodes = node.children.every(child => {
      return child.type === "inlineCode" || child.type === "text" && child.value === "\n";
    });

    const hasOnlyImageNodes = node.children.every(child => {
      return child.type === "image" || child.type === "text" && child.value === "\n";
    });

    if (!hasOnlyCodeNodes && !hasOnlyImageNodes) {
      return;
    }

    remove(node, "text");

    parent.children.splice(index, 1, ...node.children);

    return index;
  });
};