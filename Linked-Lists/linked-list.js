/* Linked lists: class version */

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = this.head;
  }

  // Adds value to the end of the list
  append(value) {
    // Create new node
    const node = new Node(value);
    // Store current node as head node
    let current = this.head;

    // If list is empty, add value and store value as head
    if (this.head === null) {
      this.head = node;
    } else {
      // Iterate to end of the list
      while (current.next) {
        current = current.next;
      }

      // Add node to the end of the list
      current.next = node;
    }
    this.size++;
  }

  // Add value to the start of the list
  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  // Add value at specific position in list
  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      return console.log('Please enter a valid index.');
    } else {
      const node = new Node(value);
      let current = this.head;
      let prev;

      // Add the value to the first index
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        // Iterate over the list to find the position to insert
        let i = 0;
        while (i < index) {
          prev = current;
          current = current.next;
          i++;
        }

        // Adding the value
        node.next = current;
        prev.next = node;
      }
      this.size++;
    }
  }

  // Remove and return a value at a specific index
  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return console.log('Please enter a valid index.');
    } else {
      let current = this.head;
      let prev = current;
      let i = 0;

      // If first item
      if (index === 0) {
        this.head = current.next;
      } else {
        // Iterate over list to remove from a position
        while (i < index) {
          prev = current;
          current = current.next;
          i++;
        }
        // Remove the value
        prev.next = current.next;
      }
      this.size--;
      return current.value;
    }
  }

  // Remove a value given its value
  removeValue(value) {
    let current = this.head;
    let prev = null;

    while (current != null) {
      if (current.value === value) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next
        }
        this.size--;
        return current.value;
      }
      prev = current;
      current = current.next;
    }
    return null;
  }

  pop() {
    let current = this.head;
    let prev;

    if (current === null) return;

    for (let i = 0; i < this.size - 1; i++) {
      prev = current;
      current = current.next;
    }

    prev.next = current.next;
    this.size--;
    return current.value;
  }


  isEmpty() {
    return this.size == 0;
  }

  size() {
    return this.size;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    // Store current node as head node
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }

  // Finds the index of a value
  find(value) {
    let index = 0;
    let current = this.head;

    while (current != null) {
      if (current.value === value) return index;
      index++;
      current = current.next
    }  
  // if not found;
  return null;
  }

  contains(value) {
    let current = this.head;
    while (current != null) {
      return current.value = value ? true : current = current.next;
    }
    return false;
  }

  printToString() {
    let current = this.head;
    let string = '';

    while (current) {
      string += `( ${current.value} ) -> `;
      current = current.next;
      if (current == null) {
        string += 'null';
      }
    }
    console.log(string);
  }
}


/* Linked lists: factory function version */

/* const LinkedList = () => {

}

const Node = () => {
  
}
 */
