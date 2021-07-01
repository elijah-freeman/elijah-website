/**
 *
 * If user has not placed an order yet, the simple message and button is displayed to allow user to navigate to order page.
 * If an order is placed then this message and button are hidden. An order summary is shown the user. The user can make
 * many different orders before checking out. A final total is displayed at the bottom for user to see. There is a
 * an input for payment method (for demonstration - non functional). When the user clicks the "Place Order" button, the
 * pages messages change to reflect the change in order status.
 *
 * @summary provides all functionality for {@link cart.html} page.
 * @author Elijah Freeman <elijahff@uw.edu>
 *
 * Created      : 2021-01-05
 * Last Modified : 2021-01-12
 */

if (sessionStorage.getItem('orderCount')) {
    sessionStorage.setItem('orderTotal', '0');
    // If multiple orders stored in session storage, iterate through each other and build an order summary.
    for (let i = 0; i <= parseInt(sessionStorage.getItem('orderCount')); i++) {
        let key = `Order ${i}`;
        const order = JSON.parse(sessionStorage.getItem(key));

        if (order) {
            if (order.base.item && order.size.item && order.protein.item) {
                // Hide empty cart messages
                document.querySelector('#cart-empty-message').style.display = 'none';
                document.querySelector('#order-button').style.display = 'none';

                // Make payment container and main order container visible.
                document.querySelector('.payment-container').style.display = 'flex';
                document.querySelector('#main-order-container').style.display = 'flex';
                document.querySelector('#order-more').style.display = 'block';

                // Main container that contains all the orders.
                const mainContainer = document.querySelector('#main-order-container');
                const mainContainerId = '#main-order-container';

                // Container that contains the full contents of each order.
                const container = document.createElement('div');
                container.id = `Order-${i}`;
                let containerId = `#Order-${i}`;

                // If user provided a name for this order then create name element and place at top of order.
                const orderName = document.createElement('h4');
                orderName.classList.add('order-name');
                orderName.id = `Order-${i}-name`
                let finalName = null;
                if (order.orderName !== 'Guest') {
                    orderName.innerHTML = order.orderName;
                    finalName = order.orderName;
                } else {
                    orderName.innerHTML = `Order ${i + 1}`;
                    finalName = `Order ${i + 1}`;
                }
                container.appendChild(orderName);

                const img = document.createElement('img');
                img.src = '../res/trashcan.png';
                img.alt = 'Clickable trashcan icon that deletes an order.';
                img.classList.add('trashcan');

                img.addEventListener('click', () => {
                    let orderTotal = parseFloat(sessionStorage.getItem('orderTotal'));
                    orderTotal = orderTotal - order.total;
                    sessionStorage.setItem('orderTotal', orderTotal.toFixed(2).toString());
                    const finalTotal = document.querySelector('#h3-final-total');
                    finalTotal.innerHTML = `$${sessionStorage.getItem('orderTotal')}`;
                    container.remove();
                    sessionStorage.removeItem(key);
                })

                container.appendChild(img);

                mainContainer.appendChild(container);

                // Create Base, Size, Protein elements.
                createElement(order.size.item, order.size.price, mainContainerId, containerId, 'Size');
                createElement(order.base.item, order.base.price, mainContainerId, containerId, 'Base');
                createElement(order.protein.item, order.protein.price, mainContainerId, containerId, 'Protein');


                // Create topping and special topping elements if there are any.
                if (order.topping || order.specialTopping) {

                    if (order.topping.length > 0) {
                        // Label element for topping.
                        let pLabel = document.createElement('p');
                        pLabel.classList.add('label');
                        pLabel.innerHTML = "Toppings"

                        let toppingDiv = document.createElement('div');
                        toppingDiv.classList.add('container');
                        toppingDiv.id = `topping-container-${i}`;
                        let toppingDivId = `#topping-container-${i}`
                        toppingDiv.appendChild(pLabel);
                        container.appendChild(toppingDiv);

                        // Create elements for each topping.
                        const toppings = order.topping;
                        for (let top in toppings) {
                            createElement(toppings[top].item, toppings[top].price, mainContainerId, containerId, null, toppingDivId);
                        }
                    }

                    if (order.specialTopping.length > 0) {
                        // Label element for topping.
                        let pLabel = document.createElement('p');
                        pLabel.classList.add('label');
                        pLabel.innerHTML = "Special Toppings"

                        let toppingDiv = document.createElement('div');
                        toppingDiv.classList.add('container');
                        toppingDiv.id = `special-topping-container-${i}`;
                        let toppingDivId = `#special-topping-container-${i}`;
                        toppingDiv.appendChild(pLabel);

                        container.appendChild(toppingDiv);

                        // create an element for each topping.
                        const toppings = order.specialTopping;
                        for (let top in toppings) {
                            createElement(toppings[top].item, toppings[top].price, mainContainerId, containerId, null, toppingDivId);
                        }
                    }
                }

                // Build content and containers for the total of each order.
                const totalWord = document.createElement('p');
                totalWord.classList.add('cart-items-p', 'total-align');
                totalWord.id = `total-word-${i}`;
                totalWord.innerHTML = `${finalName}'s total`;

                const totalPrice = document.createElement('p');
                totalPrice.classList.add('cart-items-p', 'total-align');
                totalPrice.id = `total-p-${i}`;
                totalPrice.innerHTML = `$${order.total.toFixed(2)}`;

                // Update the final price to include price of this order.
                let value = parseFloat(sessionStorage.getItem('orderTotal'));
                value += order.total;
                sessionStorage.setItem('orderTotal', value.toString());

                const totalContainer = document.createElement('div');
                totalContainer.classList.add('item-price-container', 'total');
                totalContainer.id = `total-container-${i}`;

                const totalContainerOuter = document.createElement('div');
                totalContainerOuter.classList.add('total-container-outer');

                totalContainer.appendChild(totalWord);
                totalContainer.appendChild(totalPrice);
                totalContainerOuter.appendChild(totalContainer);

                container.appendChild(totalContainerOuter);

                // Add final price.
                const finalTotal = document.querySelector('#h3-final-total');
                finalTotal.innerHTML = `$${parseFloat(sessionStorage.getItem('orderTotal')).toFixed(2)}`;
            }
        }
    }
}


/**
 * Creates an html element that forms each order.
 * @param item the name of the item.
 * @param price the price of the item.
 * @param mainContainer the main container to which container should be added.
 * @param container the container to which the element should be added.
 * @param label the label for this item.
 * @param topping the topping(s).
 */
function createElement(item, price ,mainContainer, container, label, topping) {
    // Item name element.
    const pElemItem = document.createElement('p');
    pElemItem.classList.add('cart-items-p')
    pElemItem.innerHTML = item;

    // Item price element.
    const pElemPrice = document.createElement('p');
    pElemPrice.classList.add('cart-items-p');
    pElemPrice.innerHTML = price;

    // Container for Item and Price (layout).
    const itemPriceContainer = document.createElement('div');
    itemPriceContainer.classList.add('item-price-container');
    itemPriceContainer.appendChild(pElemItem);
    itemPriceContainer.appendChild(pElemPrice);

    // If Base, Protein or Size.
    if (!topping) {
        // Label element for item (Base, Size, Protein).
        const pLabel = document.createElement('p');
        pLabel.classList.add('label');
        pLabel.innerHTML = label;

        // Add label to container.
        const labelItemPriceContainer = document.createElement('div');
        labelItemPriceContainer.classList.add('container');
        labelItemPriceContainer.appendChild(pLabel);
        labelItemPriceContainer.appendChild(itemPriceContainer)

        const orderContainer = document.querySelector(`${container}`);
        orderContainer.classList.add('order-container');

        orderContainer.appendChild(labelItemPriceContainer);

    } else {
        // If topping, do not add label.
        const toppingContainer = document.querySelector(`${topping}`);
        toppingContainer.appendChild(itemPriceContainer);
    }
}


/**
 * Provides functionality to Order button. If button clicked, user taken to {@link order.html} page.
 */
document.querySelector('#order-button').addEventListener('click', () => {
    location.href = 'order.html';
})

/**
 * Navigates user back to {@link order.html} to place another order before checkout.
 */
document.querySelector('#order-more').addEventListener('click', () => {
    location.href = 'order.html';
})


/**
 * When user click "Place Order" button then order is considered complete. Order success messages are displayed on page,
 * and sessionStorage is cleared. Local storage is also cleared here (until sign out button is implemented).
 */
document.querySelector('#place-order').addEventListener('click', () => {
    const successContainer = document.querySelector('.success-order-container');
    successContainer.style.display = 'block';

    document.querySelector('.trashcan').remove();

    const cartSummary = document.querySelector('#cart-summary');
    cartSummary.innerHTML = "Order Summary";

    const pageTitle = document.querySelector('h1');
    pageTitle.style.fontWeight = '400';
    pageTitle.style.fontSize = '3em';
    pageTitle.innerHTML = "Thank you for placing an order with Poke Restaurant!";
    sessionStorage.clear();
    localStorage.clear();
})