## 1. Difference between getElementById, getElementsByClassName, and querySelector?
 * - getElementById: It find only one thing using ID. It is very fast.
   - getElementsByClassName: It find many things with same class. It give a list.
   - querySelector: It is modern. You can use CSS style like . or #. querySelectorAll find all finds all the elements, not just the first one.

## How to create and insert new element?
 * First, we use document.createElement('div') to make it. Then we use .innerText to put some text. Last, we use .appendChild() to put it inside the main HTML body or a div.

## What is Event Bubbling?
 * Event bubbling is like a bubble in water. If you click a button, the click goes up to the parent, then to the next parent, and goes up to the top of the website.

## What is Event Delegation?
 * It is a trick. We put one click listener on the big parent instead of putting it on many children. It is useful because it save memory and works even if we add new cards later.

## It is a trick. We put one click listener on the big parent instead of putting it on many children. It is useful because it save memory and works even if we add new cards later.
 * - preventDefault(): It stop the browser default work. Example: stop a link from opening or form from reload.
   - stopPropagation(): It stop the "Bubbling". It tell the event "Don't go to your parents."

