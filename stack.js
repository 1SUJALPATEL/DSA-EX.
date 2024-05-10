// Programming Exercise 4 //

class stack {

    constructor() {

        this.arr = []
        this.reverse = []

    }

    Underflow() {

        if (this.arr.length == 0) {

            console.log("Stack is underflow");

        }
    }

    addElement(element) {

        this.arr.push(element)

    }

    OverFlow() {

        if (this.arr.length > 6) {

            console.log("Stack is overflow");

        }
    }

    print() {

        this.arr.map((val, ind) => {

            console.log(val);

        })
    }

    StackReverse() {

        console.log("Reverse Array");

        for (let i = 0; i < this.arr.length; i++) {

            this.reverse[i] = this.arr[this.arr.length - 1 - i]

        }

        console.log(this.reverse);
    }

    
    TopElement() {

        console.log("Top Element");

        console.log(this.arr[this.arr.length - 1]);

    }

    lastElement() {

        console.log("Last Element");

        console.log(this.arr[0]);

    }

    secondLast() {

        console.log("SecondLast Element");

        console.log(this.arr[1]);

    }

}

let s1 = new stack();

s1.addElement(458);
