function handleSubscriptionForm(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
  
    // Here, you would perform server-side processing and handle payment with a payment gateway.
    // For this example, we will simply display a success message and assume the subscription is successful.
    const subscriptionStatusElement = document.getElementById('subscriptionStatus');
    subscriptionStatusElement.textContent = `Subscription for ${name} is successful!`;
  
    // Save the subscription data (e.g., start and end dates) on the server-side for future reference.
    // You can use AJAX or Fetch API to send this data to your server for processing.
  
    // Schedule the recurring subscription renewal
    const subscriptionIntervalMonths = 3;
    scheduleRecurringRenewal(subscriptionIntervalMonths);
  }
  
  // Function to schedule recurring subscription renewal
  function scheduleRecurringRenewal(intervalMonths) {
    const currentDate = new Date();
    const renewalDate = new Date(currentDate);
    renewalDate.setMonth(renewalDate.getMonth() + intervalMonths);
  
    // You can use this renewalDate value to set up a recurring job on your server
    // that automatically renews the subscription for the user at the specified renewalDate.
  
    // For this example, we will simply log the renewal date to the console.
    console.log(`Your subscription will be renewed on: ${renewalDate}`);
  }
  
  // Attach the form submission handler when the page loads
  document.addEventListener('DOMContentLoaded', function() {
    const subscriptionForm = document.getElementById('subscriptionForm');
    subscriptionForm.addEventListener('submit', handleSubscriptionForm);
  });