export default function dateAndTime() {
  // Get the current local time and date
  const now = new Date();

  // Format the time and date
 const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  };
  const formattedTime = now.toLocaleDateString('en-US', options);

  // Render the time and date on the webpage
  const localTimeElement = document.querySelector('.date-time');
  localTimeElement.innerHTML = formattedTime;
}