const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootOfTree = null;
  }
  root(a) {
    if (a === null) return null;
    let root = this.rootOfTree;
    return root;
  }
  add(data) {
    let newNode = new Node(data);
    if (data === null) return null;
    if (this.rootOfTree === null) {
      this.rootOfTree = newNode;
    } else {
      this.addNode(this.rootOfTree, newNode);
    }
  }
  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    }
    if (newNode.data > node.data) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }

  has(data, node = this.rootOfTree) {
    if (node === null) return false;
    if (data === node.data) return true;

    if (data > node.data) return this.has(data, node.right);
    if (data < node.data) return this.has(data, node.left);
  }

  find(data, node = this.rootOfTree) {
    if (node === null) return null;
    if (data === node.data) return node;

    if (data > node.data) return this.find(data, node.right);
    if (data < node.data) return this.find(data, node.left);
  }

  remove(data) {
    this.rootOfTree = this.removeNode(this.rootOfTree, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }

    if (data === node.data) {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      }
      if (node.right === null) {
        node = node.left;
        return node;
      }

      let newNode = this.find(this.min(node.right));
      node.data = newNode.data;
      node.right = this.removeNode(node.right, newNode.data);
      return node;
    }
  }

  min(node = this.rootOfTree) {
    if (node.left !== null) {
      return this.min(node.left);
    } else return node.data;
  }

  max(node = this.rootOfTree) {
    if (node.right !== null) {
      return this.max(node.right);
    } else return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
