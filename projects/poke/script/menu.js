/**
 *
 * Provides functionality for order button. If pressed, user is taken to {@link order.html}.
 *
 * @summary functionality for Order button.
 * @author Elijah Freeman <elijahff@uw.edu>
 *
 * Created      : 2021-01-05
 * Last Modified : 2021-01-12
 */

const orderButton = document.querySelector('button');

orderButton.addEventListener('click', () => {
    location.href = 'order.html';
})