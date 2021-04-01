/**
 * User can create a Poke Bowl by selecting items from the following categories: Size, Base, Protein, Toppings, Special
 * Toppings. Each item in the category is a clickable button. If user wants to select an item to be added to their cart,
 * the select an item from that category. If item is in the Size, Base, Protein category then only 1 item per category can
 * be selected per order. User can select different items after an item has been added to the cart. If item has been
 * added to cart then clicking another item in that category will remove item and add the newly selected item.
 *
 * User can select multiple items from Topping and Special Topping categories. If user want's to remove item then user
 * can click on a highlighted item to remove it from cart.
 *
 * After user selects first item, a popup cart displays that shows the item and a running total. Cart updates each time
 * a user interacts with an item to reflect users latest choice.
 *
 * The user has an option to name the order, if user does not name an order then the default name with be Order 1, Order 2..
 * so on. Once user clicks "add to cart button" the order is saved in session storage and user is taken to {@link cart.html}
 * User must have selected at least the Base, Size and Protein items if order is to be saved, or order will be
 * considered incomplete.
 *
 *
 * @summary provides all functionality in {@link order.html} page.
 * @author Elijah Freeman <elijahff@uw.edu>
 *
 * Created      : 2021-01-05
 * Last Modified : 2021-01-12
 */

/**
 * For order object. Contains information required to track users order.
 */
class Order {
    /**
     * @param orderName the name of the users order.
     * @param orderNumber the order number for this order.
     * @param topping a list of toppings for this order.
     * @param specialTopping a list of special toppings for this order.
     * @param size the size of poke bowl.
     * @param base the base of poke bowl.
     * @param protein the protein of poke bowl.
     * @param total the total cost of this poke bowl.
     */
    constructor(orderName, orderNumber, topping, specialTopping, size, base, protein, total) {
        Object.assign(this, {orderName, orderNumber, topping, specialTopping, size, base, protein, total});
    }

    /**
     * Returns the topping list specified by argument passed.
     * @param s the topping list to return.
     * @returns {*}
     */
    getToppingType(s) {
        if (s === "topping") {
            return this.topping;
        } else {
            return this.specialTopping;
        }
    }
}

// Map contains each button along with the price of that item.
const menu = new Map();

menu.set('small', { button: document.querySelector('#small'), price: 3.05 })
menu.set('medium', { button: document.querySelector('#medium'), price: 4.05})
menu.set('large', { button: document.querySelector('#large'), price: 5.25})

menu.set('white-rice', { button: document.querySelector('#white-rice'), price: 1.25 })
menu.set('brown-rice', { button: document.querySelector('#brown-rice'), price: 1.25 })
menu.set('noodles',  { button: document.querySelector('#noodles'), price: 1.25 })
menu.set('greens', { button: document.querySelector('#greens'), price: 1.25 })

menu.set('tuna', { button: document.querySelector('#tuna'), price: 3.25 })
menu.set('salmon', { button: document.querySelector('#salmon'), price: 5.25 })
menu.set('spicy-tuna', { button: document.querySelector('#spicy-tuna'), price: 3.25 })
menu.set('octopus', { button: document.querySelector('#octopus'), price: 6.25 })
menu.set('tofu', { button: document.querySelector('#tofu'), price: 2.25 })
menu.set('shrimp', { button: document.querySelector('#shrimp'), price: 2.25 })
menu.set('scallop', { button: document.querySelector('#scallop'), price: 2.55 })

menu.set('jalapeno', { button: document.querySelector('#jalapeno'), price: 1.25 })
menu.set('cucumber', { button: document.querySelector('#cucumber'), price: 1.25 })
menu.set('cilantro', { button: document.querySelector('#cilantro'), price: 1.05 })
menu.set('pineapple', { button: document.querySelector('#pineapple'), price: 1.05 })
menu.set('kale', { button: document.querySelector('#kale'), price: 1.25 })
menu.set('green-onion', { button: document.querySelector('#green-onion'), price: 1.05 })
menu.set('sweet-onion', { button: document.querySelector('#sweet-onion'), price: 1.05 })
menu.set('edamame', { button: document.querySelector('#edamame'), price: 1.55 })

menu.set('ginger', { button: document.querySelector('#ginger'), price: 1.75 })
menu.set('wasabi', { button: document.querySelector('#wasabi'), price: 1.75 })
menu.set('avocado', { button: document.querySelector('#avocado'), price: 2.25 })
menu.set('masago', { button: document.querySelector('#masago'), price: 1.75 })

// Order object.
const order= new Order('Guest', 1, [], [], {}, {}, {}, 0)

// Iterate through buttons and add an eventListener to each.
const buttons = document.querySelectorAll('button');
for (let button of buttons) {
    button.addEventListener('click', function(event) {

        let item = menu.get(event.target.id);
        styleButton(item.button); // If button clicked, make style persistent.


        if (item.button.className === 'topping' || item.button.className === 'specialTopping') { // toppings
            if (item.button.className === 'topping') {
                evaluateTopping(item, 'topping')
            } else {
                evaluateTopping(item, 'specialTopping')
            }
        } else {
            /*
            Check item category (base, size, protein) && check if already selected. If already selected then do nothing. If
            selecting a different item then unselect all other items in that category, remove from cart, reset style,
            and update order object.
             */
            if (item.button.className === 'base' && order.base.item !== item.button.value) {
                order.base = {item: item.button.value, price: menu.get(item.button.id).price};
                addItemToCart(item.button.id, item.button.value, item.price);
            } else if (item.button.className === 'size' && order.size.item !== item.button.value) {
                order.size = {item: item.button.value, price: menu.get(item.button.id).price};
                addItemToCart(item.button.id, item.button.value, item.price);
            } else if (item.button.className === 'protein' && order.protein.item !== item.button.value) {
                order.protein = {item: item.button.value, price: menu.get(item.button.id).price};
                addItemToCart(item.button.id, item.button.value, item.price);
            }
            // Remove all other items in that category except this one.
            for (const menuItem of menu.keys()) {
                if (menu.get(menuItem).button.className === item.button.className && menuItem !== item.button.id) {
                    resetStyle(menu.get(menuItem).button);
                    removeFromCart(menu.get(menuItem).button.id, menu.get(menuItem).price);
                }
            }
        }
    })
}

function evaluateTopping(item, str) {
    let flag = true;
    // If topping has already been selected remove it.
    let toppingType = order.getToppingType(str);
    for (let topping in toppingType) {
        if (toppingType[topping].item === item.button.value) {
            toppingType.splice(topping, 1);
            resetStyle(item.button);
            removeFromCart(item.button.id, item.price);
            flag = false;
        }
    }
    if (flag) { // If topping not selected then add it.
        toppingType.push({item: item.button.value, price: menu.get(item.button.id).price});
        addItemToCart(item.button.id, item.button.value, item.price);
    }
}

/**
 * Creates an html element for that item and adds element to floating cart.
 *
 * @param itemId the id for new the element.
 * @param itemValue the price of that item to be displayed in floating cart.
 * @param priceValue the price of that item to be displayed in floating cart.
 */
function addItemToCart(itemId, itemValue, priceValue) {
    const floatContainer = document.querySelector('#floating-cart');
    floatContainer.style.display = 'block';

    // Div container required for styling and positioning.
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'row';
    container.style.justifyContent = 'space-between';
    container.style.borderBottom = '1px solid #a5a58d';
    container.style.margin = '3px 9px';

    container.id = `cart-${itemId}`

    const item = document.createElement('p'); // Item name element.
    item.innerHTML = itemValue;

    const price = document.createElement('p'); // Item price element.
    price.innerHTML = priceValue;

    container.appendChild(item);
    container.appendChild(price);

    const floatingCart = document.querySelector('#floating-container');
    floatingCart.appendChild(container);

    order.total += parseFloat(priceValue); // Update orders total value.
    const totalPriceContainer = document.querySelector('#total-price');
    totalPriceContainer.innerHTML = `$${order.total.toFixed(2)}`;
}

/**
 * Removes html element from floating cart.
 *
 * @param itemId the value of the element to be removed.
 * @param priceValue the price of the element to be removed.
 */
function removeFromCart(itemId, priceValue) {
    const elem = document.querySelector(`#cart-${itemId}`);
    if (elem) {
        elem.remove();
        order.total -= parseFloat(priceValue); // Update order total.
        const totalPriceContainer = document.querySelector('#total-price');
        totalPriceContainer.innerHTML = `$${order.total.toFixed(2)}`; // Display new order total.
    }
}

/**
 * Makes the style of the button persistent when clicked.
 * @param button to be styled.
 */
function styleButton(button) {
    button.style.color = '#006d77';
    button.style.borderColor = '#00cee0';
    button.style.boxShadow = '0 0.5em 0.5em -0.4em #00cee0';
    button.style.transform = 'translate(-0.25em)';
}

/**
 * Resets the style of the button.
 * @param button to be un-styled.
 */
function resetStyle(button) {
    button.style.borderColor = '#264653';
    button.style.color = 'black';
    button.style.boxShadow = 'none';
    button.style.transform = 'translate(+0.25em)';
}

/**
 * Updates the number of orders that have been placed.
 */
function updateSessionCounter() {
    // Session storage empty then create orderCount.
    if (sessionStorage.length === 0) {
        sessionStorage.setItem('orderCount', '0');
    } else { // Session storage not empty.
        // If session storage already has order count then update value.
        if (sessionStorage.getItem('orderCount')) {
            let count = parseInt(sessionStorage.getItem('orderCount'));
            count++;
            sessionStorage.setItem('orderCount', count.toString());
        } else { // Create orderCount.
            sessionStorage.setItem('orderCount', '0');
        }
    }
}

/**
 * Provides functionality to the "Add to Cart" button. When user clicks button, if user entered name for the order
 * then the order name is saved. If user selects at least Base, Protein, and Size items then order is considered complete.
 * The order count is updated and saved, and the order is saved to session storage and user is taken to {@link cart.html}
 * page.
 */
document.querySelector('#add-to-cart').addEventListener('click', () => {
    const input = document.querySelector('#order-name-input').value;
    if (input) {
        order.orderName = input;
    }

    if (order.base.item && order.protein.item && order.size.item) {
        updateSessionCounter();
    }

    order.orderNumber = sessionStorage.getItem('orderCount');
    window.sessionStorage.setItem(`Order ${order.orderNumber}`, JSON.stringify(order))
    location.href = 'cart.html';
})
